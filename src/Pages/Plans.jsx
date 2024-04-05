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
                <h2 className='font2' style={{ marginLeft: '30%' }}>Learning Plans</h2>
            </div>
            <p className='font2' style={{ marginLeft: '30%', width: '50%' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus velit provident qui suscipit. Minima fugit animi obcaecati eaque deleniti, repudiandae rerum blanditiis consequuntur, delectus dolores sapiente est. Obcaecati, sed!
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