import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormControl, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import { db, auth } from "../firebase";
import {
    addDoc,
    collection,
    serverTimestamp,
} from "firebase/firestore";
import { useNavigate } from 'react-router';

const initialState = {
    title: "",
    category: "",
    paragraphs: [{ text: "", image: "", caption: "" }],
};

const categoryOption = [
    "Artificial Intelligence",
    "Blockchain",
    "Blogging",
    "Cloud Computing",
    "Coding",
    "Content Marketing",
    "Copywriting",
    "Cybersecurity",
    "Data Analysis",
    "Data Science",
    "Digital Marketing",
    "Email Marketing",
    "Graphic Design",
    "Machine Learning",
    "Project Management",
    "Sales",
    "SEO",
    "Social Media Marketing",
    "Software Development",
    "UX design",
    "Video Editing",
    "Web Development",
];

const notify = () => toast.success("Blog posted successfully!", {
    position: toast.POSITION.BOTTOM_RIGHT
});

const Addblog = () => {
    const user = auth.currentUser;
    const [form, setForm] = useState(initialState);
    const navigate = useNavigate();

    const { title, category, paragraphs } = form;

    const handleChange = (e, index) => {
        if (e.target.name.startsWith('parag')) {
            const newParagraphs = [...paragraphs];
            newParagraphs[index].text = e.target.value;
            setForm({ ...form, paragraphs: newParagraphs });
        } else if (e.target.name.startsWith('image') || e.target.name.startsWith('caption')) {
            const newParagraphs = [...paragraphs];
            const field = e.target.name.startsWith('image') ? 'image' : 'caption';
            newParagraphs[index][field] = e.target.value;
            setForm({ ...form, paragraphs: newParagraphs });
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
    };

    const onCategoryChange = (e) => {
        setForm({ ...form, category: e.target.value });
    };

    const addParagraph = () => {
        setForm({
            ...form,
            paragraphs: [...paragraphs, { text: "", image: "", caption: "" }]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user && category && title) {
            try {
                await addDoc(collection(db, "blogpost"), {
                    ...form,
                    timestamp: serverTimestamp(),
                    author: auth.currentUser.displayName,
                    userId: auth.currentUser.uid,
                    profile: auth.currentUser.photoURL,
                    likes: [],
                    comments: []
                });
                notify();
                navigate("/account");
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div>
            <section className='mx-2 my-5 pt-5 text-center row'>
                <h1 className='mb-5'>Create Your Blog Post</h1>

                <div className="col-8 m-auto">
                    <Paper elevation={3} className='paper-post pb-3 pt-3 px-2'>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '90%' },
                            }}
                            noValidate
                            onSubmit={handleSubmit}
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    required
                                    id="title"
                                    name="title"
                                    label="Your Main Title"
                                    value={title}
                                    onChange={handleChange}
                                    placeholder="Enter the main title here.."
                                />
                                <FormControl sx={{ width: '90%' }}>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={category}
                                        label="Select the blogpost category"
                                        onChange={onCategoryChange}
                                    >
                                        {categoryOption.map((option, index) => (
                                            <MenuItem value={option || ""} key={index}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                {paragraphs.map((para, index) => (
                                    <div key={index} className='pt-2'>
                                        <TextField
                                            id={`parag${index}`}
                                            name={`parag${index}`}
                                            label={`Paragraph ${index + 1}`}
                                            value={para.text}
                                            onChange={(e) => handleChange(e, index)}
                                            multiline
                                            rows={4}
                                            placeholder="Enter your paragraph here.."
                                        />
                                        <TextField
                                            id={`image${index}`}
                                            name={`image${index}`}
                                            label={`Photo ${index + 1} link`}
                                            value={para.image}
                                            onChange={(e) => handleChange(e, index)}
                                            placeholder="Paste your photo link here.."
                                        />
                                        <TextField
                                            id={`caption${index}`}
                                            name={`caption${index}`}
                                            label={`Caption for Photo ${index + 1}`}
                                            value={para.caption}
                                            onChange={(e) => handleChange(e, index)}
                                            type="text"
                                            placeholder="Type your caption here"
                                        />
                                    </div>
                                ))}
                                <button type='button' className='btn btn-secondary m-1' onClick={addParagraph}>Add another paragraph</button>
                                <button id='signin' onClick={notify} variant="success" type="submit" className='btn btn-success'>Send</button>
                                <ToastContainer />
                            </div>
                        </Box>
                    </Paper>
                </div>
            </section>
        </div>
    )
}

export default Addblog;