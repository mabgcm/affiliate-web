import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom'; // Updated import
import courseImage from '../assets/img/default-image.jpg';

const CourseBox = ({ plan }) => {

    let navigate = useNavigate(); // Updated to use useNavigate

    const handleClick = () => {
        navigate(`/learningplan/${plan.id}`);
    };

    return (
        <Card sx={{ maxWidth: 345, margin: '10px' }} onClick={handleClick}>
            <CardActionArea>
                <CardMedia
                    sx={{ height: 140 }}
                    image={require(`../assets/img/${plan.image}`)}
                    title={plan.title}
                />
                <Stack direction="row" spacing={1} sx={{ margin: 2 }}>
                    <Chip label={plan.duration} color="primary" />
                    <Chip label={`${plan.hoursPerWeek} hours/week`} color="success" />
                </Stack>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {plan.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {plan.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CourseBox;