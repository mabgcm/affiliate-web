import React, { useState, useEffect } from 'react';
import { Box, Typography, Link, Grid, Chip, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';

const LearningPlan = () => {
    const [curriculum, setCurriculum] = useState({});
    const { dataFilename } = useParams(); // Get the dataFilename parameter from the URL

    useEffect(() => {
        if (dataFilename) {
            const filename = decodeURIComponent(dataFilename);
            fetch(filename)
                .then(response => response.json())
                .then(data => setCurriculum(data.curriculum)); // Assuming the JSON structure contains a "curriculum" key
        }
    }, [dataFilename]); // Re-fetch when dataFilename changes

    const isVideoLink = (url) => {
        return url.includes("youtube") || url.includes("vimeo");
    };

    return (

        <Grid container spacing={2} sx={{ marginTop: '100px', padding: '0 24px' }}>
            <Grid item xs={12} md={9} lg={9} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ marginTop: '40px', marginBottom: '30px', paddingLeft: '5px', align: 'center', }} variant="h4" component="h1" gutterBottom>
                        {curriculum.title}
                    </Typography>
                    <Typography sx={{ marginX: '10px' }} variant="body1" gutterBottom>
                        {curriculum.description}
                    </Typography>
                    <Box sx={{ width: '80%', marginBottom: '20px' }}>
                        <Typography variant="h6" gutterBottom>Prerequisites:</Typography>
                        <ul>
                            {curriculum.prerequisites?.map((prerequisite, index) => (
                                <li key={index}>{prerequisite}</li>
                            ))}
                        </ul>
                        <Typography variant="h6" gutterBottom>Duration:</Typography>
                        <p>{curriculum.duration}</p>
                        <Typography variant="h6" gutterBottom>Level:</Typography>
                        <p>{curriculum.level}</p>
                        <Typography variant="h6" gutterBottom>Target Audience:</Typography>
                        <p>{curriculum.targetAudience}</p>
                        <Typography variant="h6" gutterBottom>Estimated Effort:</Typography>
                        <p>{curriculum.estimatedEffort}</p>
                        <Typography variant="h6" gutterBottom>Learning Outcomes:</Typography>
                        <ul>
                            {curriculum.learningOutcomes?.map((outcome, index) => (
                                <li key={index}>{outcome}</li>
                            ))}
                        </ul>
                        {Object.entries(curriculum.weeklyBreakdown || {}).map(([week, details], index) => (
                            <Box key={index} sx={{ marginBottom: '20px' }}>
                                <Typography variant="h4" gutterBottom>{details.week}</Typography>
                                <Typography variant="h5" gutterBottom>{details.topic}</Typography>
                                <Typography variant="h6" gutterBottom>Learning Objective:</Typography>
                                <Typography variant="body1" gutterBottom>{details.objective}</Typography>
                                <Typography variant="h6" gutterBottom>Resources:</Typography>
                                <ol style={{ listStylePosition: 'inside', padding: 0, margin: 0 }}>
                                    {Object.values(details.resources).map((resource, resourceIndex) => (
                                        <li key={resourceIndex} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                            {isVideoLink(resource.link) ? (
                                                <iframe
                                                    sx={{
                                                        width: '100%', // Use 100% width for responsiveness
                                                        height: { xs: '194px', sm: '315px' }, // Adjust height based on screen size
                                                        maxWidth: '560px', // Set a max-width to constrain the video size on larger screens
                                                        marginTop: '10px'
                                                    }}
                                                    src={resource.link.replace("watch?v=", "embed/")}
                                                    title="Video player"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            ) : (
                                                <Chip
                                                    label={resource.description}
                                                    component="a"
                                                    href={resource.link}
                                                    clickable
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    color="primary"
                                                    sx={{ marginY: '10px' }}
                                                />
                                            )}
                                        </li>
                                    ))}
                                </ol>
                                <Typography variant="h6" gutterBottom>Activity of the week:</Typography>
                                <Typography variant="body1" gutterBottom>{details.activities.activity1}</Typography>
                                <Typography variant="h6" gutterBottom>Extra Sources:</Typography>
                                <ul>
                                    {details.interactiveElements?.map((element, elementIndex) => (
                                        <li key={elementIndex}>
                                            <Link href={element.link} target="_blank" rel="noopener noreferrer">{element.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                                {index !== Object.entries(curriculum.weeklyBreakdown || {}).length - 1 && (
                                    <Divider sx={{ width: '100%', my: 2 }} />
                                )}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
                <Typography variant="h6" gutterBottom>This will be the ads column</Typography>

            </Grid>
        </Grid>



    );
};

export default LearningPlan;
