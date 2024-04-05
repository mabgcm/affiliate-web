import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import courseImage from '../assets/img/img/coursee.jpg';

const CourseBox = ({ plan }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: '10px' }}>
            <CardActionArea>
                <CardMedia
                    sx={{ height: 140 }}
                    image={courseImage}
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