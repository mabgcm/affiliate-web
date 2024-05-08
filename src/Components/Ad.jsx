import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const Ad = () => {
    return (
        <div>
            <Link href="https://www.amazon.ca/MONEY-Master-Game-Financial-Freedom/dp/1476757860?crid=24ZID33PTTKO9&dib=eyJ2IjoiMSJ9.Orpo-uf5SgFC7azXdIEQVqzPBZ-83xpIMby82ppDTqR8qF2BPLrnp0PUqyj5rrMQ8hPyq9HTEbcoPeEVu1yKCAW44s-TPPSGTjzbkyvOc9AZ58oRA6Z7ZnrsDjxX7Ui3rdcsoI0O0_W4Ly8Oc38BlM0GkIlazUmXBJjLw02K8ky4-QwnFVXUrYTe0nwU6nV3aI3vCYROWWap7cSxIchWXtD-F2IlHa-CzgNvwkO9D2Y.x2pJgaKgeoyS-7lnoavvPmjKK76xECNTt2Pgdecw4bs&dib_tag=se&keywords=money&qid=1713755556&s=books&sprefix=money%2Cstripbooks%2C78&sr=1-5&linkCode=ll1&tag=selfguru03-20&linkId=3ee205dc58bd4beb88d6acb6bb78b0e7&language=en_CA&ref_=as_li_ss_tl" target="_blank" >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Typography variant='body1' textAlign='center'>Buy from Amazon.com</Typography>
                    <img alt="MONEY Master the Game: 7 Simple Steps to Financial Freedom" src="https://m.media-amazon.com/images/I/81x2aSRQqGL._SY466_.jpg" />
                </Box>

            </Link>

            <Link href="https://37b5cpj7r7wm2n6-4cy5sm8l9w.hop.clickbank.net/?tid=VIPIndicators" target="_blank" >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '15px' }}>
                    <Typography variant='body1' textAlign='center'></Typography>
                    <img alt="VIP Indicators" src="https://www.vipindicators.com/hosted/images/78/94d443797d4c489e21f2c1632a9e8a/Copy-of-Copy-of-Copy-of-Black-Modern-Elegant-Perfume-Instagram-Story-1080-x-1080-px-...png" />
                </Box>

            </Link>

        </div>
    )
}

export default Ad