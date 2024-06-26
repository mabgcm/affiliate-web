import React, { useState } from 'react';
import axios from 'axios';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea, Link, CircularProgress, Stack, Chip } from '@mui/material';
import '../assets/css/home2.css';

const JobOpportunities = () => {
    const [jobs, setJobs] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState(''); // Default search keyword
    const [loading, setLoading] = useState(false); // Loading state
    const [searchPerformed, setSearchPerformed] = useState(false);

    const staticJobs = [
        {
            id: 'static1',
            title: 'Earn From Your Photos! Photo Jobs',
            company: {
                name: 'Photojobz',
                logo: 'https://photojobzreview.wordpress.com/wp-content/uploads/2020/10/photojobz-review.png'
            },
            location: 'Remote',
            url: 'https://1fcaapr7lb4hwh4aihr5qcmziv.hop.clickbank.net',
            type: 'Part-Time',
            postDate: '3 days ago'
        },
        {
            id: 'static2',
            title: 'Online Virtual Assistant',
            company: {
                name: 'Work at Home',
                logo: 'https://home-jobs-directory.com/wp-content/uploads/2024/01/2500-online-data-entry-jobs-covers5.png'
            },
            location: 'Remote',
            url: 'https://7115eoqfh51b2h50e253iw6ka7.hop.clickbank.net',
            type: 'Contract',
            postDate: '1 week ago'
        },
        {
            id: 'static3',
            title: 'Assemble & Craft Jobs',
            company: {
                name: 'Work at Home',
                logo: 'https://assemblecraftsjobs.com/wp-content/uploads/2021/09/assemblecraftsjobs_3Dcover.jpg'
            },
            location: 'Remote',
            url: 'https://b9d43fn9m54i3c5ofy6qbrcm6w.hop.clickbank.net',
            type: 'Contract',
            postDate: '3 days ago'
        },
        {
            id: 'static4',
            title: 'Remote Jobs Portal',
            company: {
                name: 'FlexJobs',
                logo: 'https://app.impact.com/display-ad/20168-1847156?v=1'
            },
            location: 'Remote',
            url: 'https://flexjobs.sjv.io/selfguru',
            type: 'Full-Time',
            postDate: '2 weeks ago'
        },
        {
            id: 'static5',
            title: 'E-mail Marketing',
            company: {
                name: 'Funnel Mates',
                logo: 'https://lh3.googleusercontent.com/14rZYMC6_i_NL-ZDHaqMy9Uvrwy3Zm2Buf_KYK6CTNzCUoG7Iw8pVblqCaYgwhWY7am7Er0ivZP2wfW9qQ-V35lt_eTNZUjcHVEnFH8MHCVfGW5zsjGe8--LTkpfN0dEA53bW6pe'
            },
            location: 'Remote',
            url: 'https://60466hnen83e1ct20mp7ydnpih.hop.clickbank.net/?cbpage=join',
            type: 'Part-Time',
            postDate: '5 weeks ago'
        },
        {
            id: 'static6',
            title: 'Customer Support',
            company: {
                name: 'Live Chat Jobs',
                logo: 'https://affiliatesstuff.s3.amazonaws.com/SSR/SSR%20-%20FB%20Ad%20Images/SSR%20FB%20Ad%20Image%201.png'
            },
            location: 'Remote',
            url: 'https://b7201ppjh1zfyltjp2y6wmw50b.hop.clickbank.net',
            type: 'Full-Time',
            postDate: '4 days ago'
        },
        {
            id: 'static7',
            title: 'Chat Support',
            company: {
                name: 'Facebook',
                logo: 'https://cdn.pixabay.com/photo/2021/12/06/13/45/meta-6850393_960_720.png'
            },
            location: 'Remote',
            url: 'https://0bedfcmdjfyd19zgt2q7njp3jh.hop.clickbank.net',
            type: 'Full-Time',
            postDate: '1 week ago'
        }
    ];

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
        setSearchPerformed(true);
    };

    return (
        <section style={{ width: '75%', margin: 'auto', paddingTop: '150px' }}>
            <h3 className='text-center mb-5'>Remote Job Opportunities</h3>
            <div className="tf-container">
                <div className="row">
                    <div className="col-lg-12">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <form onSubmit={handleSearchSubmit} style={{ width: '100%', maxWidth: '600px', display: 'flex', alignItems: 'center', border: '1px solid #dfe1e5', borderRadius: '24px', padding: '5px 10px', boxShadow: '0 1px 6px rgba(32, 33, 36, 0.28)', marginBottom: '25px' }}>
                                <input
                                    type="text"
                                    name="search"
                                    value={searchKeyword}
                                    onChange={handleSearchChange}
                                    placeholder="Enter search keyword"
                                    style={{ flex: 1, border: 'none', outline: 'none', fontSize: '16px', padding: '10px' }}
                                />
                                <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '10px' }}>
                                    <MdOutlineSearch size={24} />
                                </button>
                            </form>
                        </div>
                        {loading ? (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                                <CircularProgress />
                            </div>
                        ) : (
                            <div>
                                {searchPerformed ? (
                                    <>
                                        <p className="text-center">
                                            <span>{jobs.length}</span> jobs recommended for you
                                        </p>
                                        <Grid container spacing={2} style={{ padding: '20px' }}>
                                            {jobs.map((job) => (
                                                <JobCard job={job} key={job.id} />
                                            ))}
                                        </Grid>
                                    </>
                                ) : (
                                    <>
                                        <h4 className="text-center">Featured Jobs</h4>
                                        <Grid container spacing={2} style={{ padding: '20px' }}>
                                            {staticJobs.map((job) => (
                                                <JobCard job={job} key={job.id} />
                                            ))}
                                        </Grid>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

const JobCard = ({ job }) => (
    <Grid item xs={12} sm={6} md={6} xxl={4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardActionArea component={Link} href={job.url} target="_blank">
                <Grid container direction="column">
                    <Grid item container alignItems="center">
                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <CardMedia
                                component="img"
                                sx={{
                                    height: 80,
                                    width: 'auto',
                                    maxHeight: { xs: 40, sm: 50, md: 60, lg: 90 },
                                    maxWidth: { xs: 'auto', sm: 'auto', md: 'auto' },
                                    borderRadius: '8px',
                                    position: { xs: 'absolute', sm: 'absolute', md: 'relative' },
                                    top: { xs: 0, sm: 0, md: 'auto' }
                                }}
                                image={job.company.logo}
                                alt={job.company.name}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <CardContent sx={{ paddingLeft: 2 }}>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: 'green',
                                    }}>
                                    {job.company.name}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {job.title}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <CardContent>
                            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                                <IoLocationOutline size={20} /> {job.location}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Chip color="success" label={job.type} />
                                <Chip color="primary" label={job.postDate} />
                            </Stack>
                        </CardContent>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    </Grid>
);

export default JobOpportunities;