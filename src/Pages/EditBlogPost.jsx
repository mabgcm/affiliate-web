import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormControl, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import { db, auth } from "../firebase";
import {
    doc,
    getDoc,
    updateDoc,
} from "firebase/firestore";
import { useNavigate, useParams } from 'react-router';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const categoryOption = [
    "Artificial Intelligence",
    "Blockchain",
    "Blogging",
    "Career Advice",
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

const notify = () =>
    toast.success("Blog updated successfully!", {
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

const EditBlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState(null);

    useEffect(() => {
        const fetchBlogPost = async () => {
            const docRef = doc(db, "blogpost", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setForm({ ...docSnap.data(), id: docSnap.id });
            } else {
                console.log("No such document!");
            }
        };

        fetchBlogPost();
    }, [id]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        if (name === "title" || name === "category") {
            setForm({ ...form, [name]: value });
        } else {
            const updatedParagraphs = form.paragraphs.map((paragraph, idx) => {
                if (idx === index) {
                    return { ...paragraph, [name]: value };
                }
                return paragraph;
            });
            setForm({ ...form, paragraphs: updatedParagraphs });
        }
    };

    const handleQuillChange = (value, index) => {
        const updatedParagraphs = form.paragraphs.map((paragraph, idx) => {
            if (idx === index) {
                return { ...paragraph, text: value };
            }
            return paragraph;
        });
        setForm({ ...form, paragraphs: updatedParagraphs });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.category && form.title) {
            try {
                const docRef = doc(db, "blogpost", id);
                await updateDoc(docRef, {
                    ...form,
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
            {form && (
                <section className='mx-2 my-5 pt-5 text-center row'>
                    <h1 className='mb-5'>Edit Your Blog Post</h1>

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
                                        value={form.title}
                                        onChange={(e) => handleChange(e)}
                                        placeholder="Enter the main title here.."
                                    />
                                    <FormControl sx={{ width: '90%' }}>
                                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={form.category}
                                            label="Select the blogpost category"
                                            onChange={(e) => handleChange(e)}
                                        >
                                            {categoryOption.map((option, index) => (
                                                <MenuItem value={option || ""} key={index}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    {form.paragraphs.map((para, index) => (
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
                                    <button id='signin' onClick={notify} variant="success" type="submit" className='btn btn-success'>Update</button>
                                    <ToastContainer />
                                </div>
                            </Box>
                        </Paper>
                    </div>
                </section>
            )}
        </div>
    );
}

export default EditBlogPost;