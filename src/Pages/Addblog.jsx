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
import ReactQuill from 'react-quill'; // Import ReactQuill
import 'react-quill/dist/quill.snow.css'; // Import Quill styles


const initialState = {
    title: "",
    category: "",
    paragraphs: [{ text: "", image: "", caption: "", subheading: "", link: "" }],
};

const categoryOption = [
    "Online Money-Making",
    "Cryptocurrency",
    "Inspirational",
    "Fundamentals",
    "Freelance Opportunities",
    "Blog Monetization",
    "Digital Tools",
    "Financial Independence",
    "Wealth Accumulation",
    "Debt Reduction",
    "Budgeting Strategies",
    "Continuous Learning",
    "Skill Development",
    "Productivity Hacks",
    "Personal Growth",
    "Entrepreneurial",
    "Side Hustle Ideas",
    "Scaling Businesses",
    "Success Tips"
];

const notify = () =>
    toast.success("Blog posted successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT
    });

const modules = {
    toolbar: [
        [{ 'font': [] }],
        [{ header: ['2', '3'] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        [{ 'color': [] }, { 'background': [] }],            // dropdown with defaults from theme
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'align': [] }],
        ['link'],                                // link and image, video
        ['clean']                                         // remove formatting button
    ],
};

const Addblog = () => {
    const user = auth.currentUser;
    const [form, setForm] = useState(initialState);
    const navigate = useNavigate();

    const { title, category, paragraphs } = form;

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        if (name === "title") {
            setForm({ ...form, title: value });
        } else if (name === "category") {
            setForm({ ...form, category: value });
        } else {
            const updatedParagraphs = paragraphs.map((paragraph, idx) => {
                if (idx === index) {
                    return { ...paragraph, [name]: value };
                }
                return paragraph;
            });
            setForm({ ...form, paragraphs: updatedParagraphs });
        }
    };

    const handleQuillChange = (value, index) => {
        const updatedParagraphs = paragraphs.map((paragraph, idx) => {
            if (idx === index) {
                return { ...paragraph, text: value };
            }
            return paragraph;
        });
        setForm({ ...form, paragraphs: updatedParagraphs });
    };

    const onCategoryChange = (e) => {
        setForm({ ...form, category: e.target.value });
    };

    const addParagraph = () => {
        setForm({
            ...form,
            paragraphs: [...paragraphs, { text: "", image: "", caption: "", subheading: "", link: "" }]
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
                                    onChange={(e) => handleChange(e)}
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
                                        {index !== 0 && (
                                            <TextField
                                                id={`subheading${index}`}
                                                name="subheading"
                                                label={`Subheading for Paragraph ${index + 1}`}
                                                value={para.subheading}
                                                onChange={(e) => handleChange(e, index)}
                                                placeholder="Enter your subheading here.."
                                            />
                                        )}
                                        <ReactQuill
                                            theme="snow"
                                            modules={modules}
                                            style={{ height: '350px', width: '90%', margin: 'auto', marginBottom: '40px' }}
                                            value={para.text}
                                            onChange={(content) => handleQuillChange(content, index)}
                                        />
                                        <TextField
                                            id={`image${index}`}
                                            name="image"
                                            label={`Photo ${index + 1} source link`}
                                            value={para.image}
                                            onChange={(e) => handleChange(e, index)}
                                            placeholder="Paste your photo link here.."
                                        />
                                        <TextField
                                            id={`link${index}`}
                                            name="link"
                                            label={`Target URL for Photo ${index + 1}`}
                                            value={para.link}
                                            onChange={(e) => handleChange(e, index)}
                                            placeholder="The target when clicking on photo"
                                        />
                                        <TextField
                                            id={`caption${index}`}
                                            name="caption"
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
    );
}

export default Addblog;