import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import course from '../assets/img/img/coursee.jpg';

const CourseBox = () => {
    return (
        <>
            <Card sx={{ maxWidth: 345, marginTop: 1, marginBottom: 4, marginX: 1 }}>
                <CardActionArea>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={course}
                        title="green iguana"
                    />
                    <Stack direction="row" spacing={1} sx={{ margin: 2 }}>
                        <Chip label="primary" color="primary" />
                        <Chip label="success" color="success" />
                    </Stack>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Course Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores itaque delectus voluptas expedita tenetur id accusamus quas magni eaque. Ullam!
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                </CardActionArea>
            </Card>
        </>
    )
}

export default CourseBox