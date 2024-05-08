import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const Ad1 = () => {
    return (
        <div>
            <Link href="https://amzn.to/3wnwayC" target="_blank" >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Typography variant='body1' textAlign='center'>Buy from Amazon.com</Typography>
                    <img alt="Financial Freedom: A Proven Path to All the Money You Will Ever Need" src="https://m.media-amazon.com/images/I/81gGW8ORjIL._SL1500_.jpg" />
                </Box>

            </Link>

        </div>
    )
}

export default Ad1