import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import { Link } from 'react-router-dom';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll'
};


const Filter = ({ categoryOption }) => {

    const [filteredCategory, setFilteredCategory] = useState("");
    const [blogposts, setBlogposts] = useState([]);
    const [availableCategories, setAvailableCategories] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleChange = (event) => {
        setFilteredCategory(event.target.value);
    };

    useEffect(() => {
        const blogpostsRef = collection(db, 'blogpost');
        const q = query(blogpostsRef, where('category', '==', filteredCategory));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                title: doc.data().title,
                author: doc.data().author,
                content: doc.data().content,
                category: doc.data().category,
                createdAt: doc.data().createdAt,
            }));
            setBlogposts(data);
        });

        return unsubscribe;
    }, [filteredCategory]);

    useEffect(() => {
        const categoryCounts = {};

        // Query the blogpost collection and count the number of articles for each category
        const unsubscribe = onSnapshot(collection(db, 'blogpost'), (snapshot) => {
            snapshot.docs.forEach((doc) => {
                const category = doc.data().category;
                categoryCounts[category] = (categoryCounts[category] || 0) + 1;
            });

            // Filter the categories that have at least one article associated with them
            const availableCategories = Object.keys(categoryCounts).filter(
                (category) => categoryCounts[category] > 0
            );
            setAvailableCategories(availableCategories);
        });

        return unsubscribe;
    }, []);

    return (<>
        <Box sx={{ minWidth: 120 }}>
            <FormControl
                fullWidth
                size='small'
                color='primary'>
                <InputLabel id="filtered-categories">Categories</InputLabel>
                <Select
                    labelId="filtered-categories"
                    id="filteredCategory"
                    value={filteredCategory}
                    label="Categories"
                    onChange={handleChange}
                >
                    {availableCategories.map((category) => (
                        <MenuItem key={category} value={category} onClick={handleOpen}>{category}</MenuItem>
                    ))}

                </Select>
            </FormControl>
        </Box>
        {blogposts.length > 0 && (
            <Modal
                aria-labelledby="title"
                aria-describedby="description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {blogposts.map((post, index) => (
                            <div className='mb-5' id="description" sx={{ mt: 2 }} key={post.id}>
                                <Link className='row d-flex' to={`/blogpost/${post.id}`}>
                                    <div className="col-2 number"><h1>{index + 1}</h1></div>
                                    <div className="col-10">
                                        <h5>{post.title}</h5>
                                        <Typography className="author">Posted By:<strong>{post.author}</strong></Typography>
                                    </div>


                                </Link>
                            </div>
                        ))}
                    </Box>
                </Fade>
            </Modal>
        )}
    </>


    );
}

export default Filter