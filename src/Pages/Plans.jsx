import React, { useState, useEffect } from 'react';
import CourseBox from '../Components/CourseBox';

const LearningPlans = () => {
    const [learningPlans, setLearningPlans] = useState([]);

    useEffect(() => {
        // Function to fetch the local JSON file
        const fetchLearningPlans = async () => {
            try {
                // Assuming the JSON file is stored in the public directory
                const response = await fetch('/plan.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setLearningPlans(data);
            } catch (error) {
                console.error("Could not fetch the learning plans", error);
            }
        };

        fetchLearningPlans();
    }, []);

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', alignItems: 'end', height: 150 }}>
                <h2 className='font2' style={{ marginLeft: '10%' }}>Earn Extra Cash with Self-Taught Skills</h2>
            </div>
            <p className='font2' style={{ marginLeft: '10%', width: '80%' }}>
                The cool thing is, you can learn tons of money-making skills all on your own these days. We've got learning plans made by our pros to teach you the good stuff. Whether you want to start a side gig, pick up in-demand digital skills, or find easy ways to make passive income - we've got you covered. So why not dive in and start your money-making adventure today?
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {learningPlans.map((plan, index) => (
                    <CourseBox key={index} plan={plan} />
                ))}
            </div>
        </>
    );
}

export default LearningPlans;