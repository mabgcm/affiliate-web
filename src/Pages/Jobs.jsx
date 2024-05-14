import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea, Link, CircularProgress } from '@mui/material';
import '../assets/css/home2.css';

const JobOpportunities = () => {
    const [jobs, setJobs] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState(''); // Default search keyword
    const [loading, setLoading] = useState(false); // Loading state

    const fetchJobs = async () => {
        setLoading(true); // Start loading
        const options = {
            method: 'GET',
            url: 'https://linkedin-data-api.p.rapidapi.com/search-jobs',
            params: {
                keywords: searchKeyword,
                datePosted: 'pastWeek',
                sort: 'mostRelevant',
                onsiteRemote: 'remote'
            },
            headers: {
                'X-RapidAPI-Key': '1bf6d1ca10mshff2db18b9b081a8p12cffdjsnab22ab444fc5',
                'X-RapidAPI-Host': 'linkedin-data-api.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setJobs(response.data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); // Stop loading regardless of the outcome
        }
    };

    const handleSearchChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetchJobs();
    };

    return (
        <section style={{ width: '75%', margin: 'auto', paddingTop: '150px' }}>
            <h3 className='text-center mb-5'>Remote Job Opportunities</h3>
            <div className="tf-container">
                <div className="row">
                    <div className="col-lg-12">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <form onSubmit={handleSearchSubmit}>
                                <input
                                    type="text"
                                    name="search"
                                    value={searchKeyword}
                                    onChange={handleSearchChange}
                                    placeholder="Enter search keyword"
                                    style={{ width: '50%' }}
                                />
                                <button type="submit">Search</button>
                            </form>
                        </div>
                        {loading ? (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                                <CircularProgress />
                            </div>
                        ) : (
                            <div>
                                <p className="text-center">
                                    <span>{jobs.length}</span> jobs recommended for you
                                </p>
                                <Grid container spacing={2} style={{ padding: '20px' }}>
                                    {jobs.map((job) => (
                                        <Grid item xs={12} sm={6} key={job.id}>
                                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                                <CardActionArea component={Link} href={job.url} target="_blank">
                                                    <Grid container alignItems="start">
                                                        <Grid item xs={2}>
                                                            <CardMedia
                                                                component="img"
                                                                sx={{
                                                                    height: 50,
                                                                    width: 'auto',
                                                                    maxHeight: { xs: 40, sm: 50, md: 60 },
                                                                    maxWidth: { xs: 'auto', sm: 'auto', md: 'auto' }
                                                                }}
                                                                image={job.company.logo}
                                                                alt={job.company.name}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={10}>
                                                            <CardContent>
                                                                <Typography gutterBottom variant="h5" component="div">
                                                                    {job.title}
                                                                </Typography>
                                                                <Typography variant="body2" color="text.secondary">
                                                                    {job.company.name}
                                                                </Typography>
                                                                <Typography variant="body2" color="text.secondary">
                                                                    Location: {job.location}
                                                                </Typography>
                                                                <Typography variant="body2" color="text.secondary">
                                                                    Type: {job.type}
                                                                </Typography>
                                                                <Typography variant="body2" color="text.secondary">
                                                                    Posted: {job.postDate}
                                                                </Typography>
                                                            </CardContent>
                                                        </Grid>
                                                    </Grid>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JobOpportunities;
