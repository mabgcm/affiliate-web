import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobOpportunities = () => {
    const [jobs, setJobs] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('golang'); // Default search keyword

    useEffect(() => {
        const fetchJobs = async () => {
            const options = {
                method: 'GET',
                url: 'https://linkedin-data-api.p.rapidapi.com/search-jobs',
                params: {
                    keywords: searchKeyword, // Use the searchKeyword state for the keywords parameter
                    datePosted: 'pastWeek',
                    sort: 'mostRelevant',
                    onsiteRemote: 'remote'
                },
                headers: {
                    'X-RapidAPI-Key': '69ad74074fmsh937454e2ab33616p17f149jsn6810824c0494',
                    'X-RapidAPI-Host': 'linkedin-data-api.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setJobs(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchJobs();
    }, [searchKeyword]); // Add searchKeyword as a dependency to useEffect

    const handleSearchChange = (e) => {
        setSearchKeyword(e.target.value); // Update searchKeyword when the input changes
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page
        // The search is automatically triggered by the useEffect hook when searchKeyword changes
    };

    return (
        <div>
            <h3 className='mt-5 pt-5'>Job Opportunities</h3>
            <div className='m-auto w-75'>
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        value={searchKeyword}
                        onChange={handleSearchChange}
                        placeholder="Enter search keyword"
                    />
                    <button type="submit">Search</button>
                </form>
                <ul>
                    {jobs.map(job => (
                        <li key={job.id}>
                            <a href={job.url}>{job.title} - {job.company.name}, {job.location}</a>
                            <Link to={job.url}> <span style={{ fontWeight: '600', color: 'blue' }}> Apply Now</span> </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default JobOpportunities;