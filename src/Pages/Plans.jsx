import React from 'react';
import CourseBox from '../Components/CourseBox';

const LearningPlans = () => {

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', alignItems: 'end', height: 150 }}>
                <h2 className='font2' style={{ marginLeft: '30%' }}>Learning Plans</h2>
            </div>
            <p className='font2' style={{ marginLeft: '30%', width: '50%' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus velit provident qui suscipit. Minima fugit animi obcaecati eaque deleniti, repudiandae rerum blanditiis consequuntur, delectus dolores sapiente est. Obcaecati, sed!</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <CourseBox style={{ flexBasis: '25%', flexGrow: 0, flexShrink: 0, maxWidth: '25%' }} />
            </div>
        </>

    )
}

export default LearningPlans