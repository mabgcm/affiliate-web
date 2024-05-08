import React, { useState, useEffect } from 'react';
import { Box, Typography, Link, Grid, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import Ad from '../Components/Ad';
import Ad1 from '../Ads/Ad1';

const LearningPlan = () => {
    const [curriculum, setCurriculum] = useState(null); // Initialize to null
    const { id } = useParams(); // Get the id parameter from the URL

    useEffect(() => {
        if (id) {
            fetch(`https://plansdata.vercel.app/learning-plan/${id}`)
                .then(response => response.json())
                .then(data => setCurriculum(data))
                .catch(error => console.error('Failed to load curriculum:', error)); // Error handling
        }
    }, [id]); // Re-fetch when id changes

    const renderResource = (resource) => {
        if (resource.link) {
            return (
                <li key={resource.name}>
                    <Link href={resource.link} target="_blank" rel="noopener">{resource.name}</Link>
                </li>
            );
        } else {
            return <li key={resource.name}>{resource.name}</li>;
        }
    };

    if (!curriculum) {
        return <Typography>Loading...</Typography>; // Display loading or similar message
    }

    return (
        <Grid container spacing={2} sx={{ marginTop: '100px', padding: '0 24px' }}>
            <Grid item xs={12} md={9} lg={9} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ marginTop: '40px', marginBottom: '30px', paddingLeft: '5px', align: 'center' }} variant="h2" component="h1" gutterBottom>
                        {curriculum.title}
                    </Typography>
                    <Typography sx={{ marginX: '10px' }} variant="body1" gutterBottom>
                        {curriculum.description}
                    </Typography>
                    {curriculum.weeks && curriculum.weeks.map((week, index) => (
                        <Box sx={{ marginLeft: '10px', width: 'calc(100% - 40px)' }} key={index}>
                            <Typography variant="h4" gutterBottom>Week {index + 1}: {week.title}</Typography>
                            <Box sx={{ marginLeft: '40px' }}>
                                <Typography variant="h6" gutterBottom>Study Hours:</Typography>
                                <p>{week.studyHours}</p>
                                <Typography variant="h6" gutterBottom>Learning Objectives:</Typography>
                                <ul>
                                    {week.learningObjectives?.map((objective, objIndex) => (
                                        <li key={objIndex}>{objective}</li>
                                    ))}
                                </ul>
                                <Typography variant="h6" gutterBottom>Topics to Cover:</Typography>
                                <ul>
                                    {week.topicsToCover?.map((topic, topicIndex) => (
                                        <li key={topicIndex}>{topic}</li>
                                    ))}
                                </ul>
                                <Typography variant="h6" gutterBottom>Weekly Tasks:</Typography>
                                <ul>
                                    {week.weeklyTasks?.map((task, taskIndex) => (
                                        <li key={taskIndex}>{task}</li>
                                    ))}
                                </ul>
                                <Typography variant="h6" gutterBottom>Resources:</Typography>
                                <ul>
                                    {week.resources?.map((resource, resIndex) => (
                                        renderResource(resource)
                                    ))}
                                </ul>
                            </Box>
                            {index !== curriculum.weeks.length - 1 && (
                                <Divider sx={{ width: '100%', my: 2 }} />
                            )}
                        </Box>
                    ))}
                </Box>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
                <Ad />
                <Ad1 />
            </Grid>
        </Grid>
    );
};

export default LearningPlan;