import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        xs: 350,
        sm: 350,
        md: 600,
        lg: 600,
        xl: 600,
    },
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll'
};

const Resume = () => {

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpen2 = () => setOpen2(true);
    const handleOpen3 = () => setOpen3(true);
    const handleOpen4 = () => setOpen4(true);
    const handleClose = () => setOpen(false);
    const handleClose2 = () => setOpen2(false);
    const handleClose3 = () => setOpen3(false);
    const handleClose4 = () => setOpen4(false);


    return (
        <>
            <section id="resume" className="resume">
                <div className="container">
                    <div className='section-title mx-5 ps-5'>
                        <h2>Resume</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 d-flex">
                            <div className="col-3">
                                <h3 className="resume-title text-end">Summary:</h3>
                            </div>
                            <div className="col-9 pt-2 sum">
                                <h5>Matt is a Full Stack Developer 5 years of experience in HTML5, CSS3, SASS(SCSS), Bootstrap-5, JavaScript ES6, React.js, Redux, Material UI, Linux, SQL, Git & GitHub, Python, APIs, RESTful APIs, Firebase, Django, Agile, and Jira. He has also strong analytical thinking, project management, and communication skills, along with a coaching mindset and resilience to adapt to new environments.</h5>
                            </div>
                        </div>

                        <div className="col-lg-10 d-flex">
                            <div className="col-3">
                                <h3 className="resume-title text-end">Technical Skills:</h3>
                            </div>
                            <div className="col-9 pt-2 sum hskill-item">
                                <h5>HTML</h5>
                                <h5>HTML5</h5>
                                <h5>CSS3</h5>
                                <h5>SASS (SCSS)</h5>
                                <h5>Bootstrap-5</h5>
                                <h5>JavaScript ES6</h5>
                                <h5>TypeScript</h5>
                                <h5>Redux</h5>
                                <h5>Angular</h5>
                                <h5>Material UI</h5>
                                <h5>Linux</h5>
                                <h5>SQL</h5>
                                <h5>Git & GitHub</h5>
                                <h5>Python</h5>
                                <h5>JSON</h5>
                                <h5>XML</h5>
                                <h5>APIs</h5>
                                <h5>RESTful APIs</h5>
                                <h5>Firebase</h5>
                                <h5>Django</h5>
                                <h5>Agile</h5>
                                <h5>Jira</h5>
                                <h5>VS Code</h5>
                            </div>
                        </div>

                        <div className="col-lg-10 d-flex">
                            <div className="col-3">
                                <h3 className="resume-title text-end">Soft Skills:</h3>
                            </div>
                            <div className="col-9 pt-2 sum skill-item">
                                <h5>Analytical Thinking</h5><h5>Self-Motivated</h5><h5>Strong Communication</h5><h5>Project Management</h5><h5>Adaptability</h5><h5>Continuous Learning</h5><h5>Collaboration & Teamwork</h5><h5>Coaching Mindset</h5><h5>Resilience</h5>
                            </div>
                        </div>


                        <div className="col-lg-10 d-flex mt-5">
                            <div className="col-3">
                                <h3 className="resume-title text-end">Education:</h3>
                            </div>
                            <div className="col-9 edu">
                                <div className="resume-item">
                                    <h5 className='shdw' onClick={handleOpen3}>Full-Stack Bootcamp</h5>
                                    <h6>Clarusway LLC, (Remote-USA)</h6>
                                    <p><Link href='https://www.clarusway.com' target='_blank' >Go to bootcamp's website</Link></p>
                                    <Modal
                                        open={open3}
                                        onClose={handleClose3}
                                        aria-labelledby="clarusway"
                                        aria-describedby="cls"
                                        className='modal3'
                                    >
                                        <Box sx={style}>
                                            <Typography id="clarusway" variant="h6" component="h2">
                                                <CloseIcon className='closeButton' onClick={handleClose3} />
                                                <h3>Full-Stack Bootcamp</h3>
                                                <h6>Clarusway LLC, (Remote-USA)</h6>
                                            </Typography>
                                            <Typography id="cls" sx={{ mt: 2 }}>
                                                <ul>
                                                    <li>Developed interactive and responsive frontend for e-commerce website using HTML5, CSS3, JavaScript ES6, React, Bootstrap-5, SASS(SCSS), and Material UI.</li>
                                                    <li>Designed a payment page using JS functions and DOM manipulation and added support for API requests using Async, Await, and Fetch.</li>
                                                    <li>Implemented state management with React States and Redux and built a Dashboard page integrated with a database.</li>
                                                    <li>Utilized React-router, Axios, and Semantic UI libraries for improved UI experience.</li>
                                                    <li>Wrote modular and reusable code, utilizing build tools, package managers, and version control (Git & Github).</li>
                                                    <li>Adhered to SCRUM & Agile methodologies, JIRA, and the Software Development Life Cycle (SDLC).</li>
                                                </ul>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </div>
                                <div className="resume-item">
                                    <h5>Bachelor of Applied Science, Linguistics,</h5>
                                    <h6>Mersin University, Turkey</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-10 d-flex mt-5">
                            <div className="col-3">
                                <h3 className="resume-title text-end">Experience:</h3>
                            </div>
                            <div className="col-9 edu">
                                <div className="resume-item">
                                    <h5 className='shdw' onClick={handleOpen4}>Front End Developer</h5>
                                    <h6>Perla Nera Construction Inc, (Toronto-Canada) - <em>March 2023 - Present</em></h6><p><Link href='https://perlanera.ca' target='_blank' >Go to employer's website</Link></p>
                                    <Modal
                                        open={open4}
                                        onClose={handleClose4}
                                        aria-labelledby="tower"
                                        aria-describedby="twr"
                                    >
                                        <Box sx={style}>
                                            <Typography id="tower" variant="h6" component="h2">
                                                <CloseIcon className='closeButton' onClick={handleClose4} />
                                                <h3>Front End Developer</h3>
                                                <h6>Perla Nera Construction Inc, (Toronto-Canada) - <em>March 2023 - Present</em></h6>
                                            </Typography>
                                            <Typography id="twr" sx={{ mt: 2 }}>
                                                <ul>
                                                    <li>Designed and developed the company's website, using Bootstrap to optimize the website for responsiveness and seamless user experience across different devices and screen sizes.</li>
                                                    <li>Collaborated with a cross-functional team to develop custom software applications and web-based systems tailored to the needs of construction project management.</li>
                                                    <li>Developed web-based interfaces and applications that interacted with BIM data.</li>
                                                    <li>Played a key role in developing front-end interfaces for construction estimating software.</li>
                                                    <li>Collaborated closely with back-end developers and stakeholders to create intuitive user interfaces, enabling contractors to input project details, generate accurate cost estimates, and track costs effectively.</li>
                                                </ul>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </div>

                                <div className="resume-item">
                                    <h5 className='shdw' onClick={handleOpen2}>Front End Developer</h5>
                                    <h6>Tower Cambridge, (Remote-Vietnam) - <em>August 2017 - Present</em></h6><p><Link href='https://towercambridge.com' target='_blank' >Go to employer's website</Link></p>
                                    <Modal
                                        open={open2}
                                        onClose={handleClose2}
                                        aria-labelledby="tower"
                                        aria-describedby="twr"
                                    >
                                        <Box sx={style}>
                                            <Typography id="tower" variant="h6" component="h2">
                                                <CloseIcon className='closeButton' onClick={handleClose2} />
                                                <h3>Front End Developer</h3>
                                                <h6>Tower Cambridge, (Remote-Vietnam) - <em>August 2017 - Present</em></h6>
                                            </Typography>
                                            <Typography id="twr" sx={{ mt: 2 }}>
                                                <ul>
                                                    <li>Built and maintained the company's web application using modern web technologies, including React, React-Bootstrap, and React-Router-Dom.</li>
                                                    <li>Developed web pages for the company's web application, resulting in a 30% increase in user engagement and user retention.</li>
                                                    <li>Improved website load time by 35% by optimizing images and implementing lazy loading.</li>
                                                    <li>Integrated PayPal as a payment gateway, leading to a 25% increase in online transactions.</li>
                                                    <li>Integrated a third-party Learning Management System to enhance the functionality of the web app.</li>
                                                    <li>Implemented payment APIs to streamline the payment process for users.</li>
                                                    <li>Improved the overall design and functionality of the web app by transitioning from HTML to React and utilizing libraries such as AOS, React-Icons, and React-Sticky.</li>
                                                    <li>Used Vercel Analytics to track user behavior and optimize the user experience.</li>
                                                    <li>Utilized popular React libraries such as React-Toastify, React-YouTube, and React-Messenger-Chat-Plugin to add enhanced functionality to the web app.</li>
                                                </ul>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </div>
                                <div className="resume-item">
                                    <h5 className='shdw' onClick={handleOpen}>ESL & ICT Teacher</h5>
                                    <h6>Vinschool, (Hanoi-Vietnam) -  <em>August 2019 - January 2023</em></h6><p><Link href='https://vinschool.edu.vn' target='_blank' >Go to employer's website</Link></p>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="vinschool"
                                        aria-describedby="vsc"
                                    >
                                        <Box sx={style}>
                                            <Typography id="vinschool" variant="" component="">
                                                <CloseIcon className='closeButton' onClick={handleClose} />
                                                <h3>ESL & ICT Teacher</h3>
                                                <h6>Vinschool, (Hanoi-Vietnam) - <em>August 2019 - January 2023</em></h6>
                                            </Typography>
                                            <Typography id="vsc" sx={{ mt: 2 }}>
                                                <ul>
                                                    <li>Taught English as a second language to primary level students.</li>
                                                    <li>Developed and implemented IT courses for beginner to secondary level students, covering topics such as Digital Literacy, Microsoft Office Suite, Web Development, and Basic Programming (Python).</li>
                                                    <li>Designed and executed lesson plans that engaged students and encouraged critical thinking, creativity, and problem solving skills.</li>
                                                    <li>Conducted individual and group sessions, providing personalized feedback and support to help students reach their goals.</li>
                                                    <li>Utilized technology and multimedia resources to enhance student learning and create interactive and engaging lessons.</li>
                                                    <li>Provided personalized guidance and support to students, helping them to overcome language and IT-related challenges.</li>
                                                    <li>Implemented project-based learning methods to provide students with hands-on experience and real-world application of the materials taught.</li>
                                                    <li>Managed a class of 25-30 students, ensuring that each student received individualized attention and support.</li>
                                                    <li>Managed and maintained a positive and supportive learning environment, fostering a positive relationship with students and promoting their success.</li>
                                                    <li>Taught approximately 800 hours over a three-year period, reaching an average of 180 students per year.</li>
                                                    <li>Utilized EdTech platforms such as Google Classroom, Khan Academy, Codecademy, and Scratch to enhance student learning and promote engagement.</li>
                                                </ul>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10 d-flex">
                            <div className="col-3">
                                <h3 className="resume-title text-end">Languages:</h3>
                            </div>
                            <div className="col-9 pt-2 sum cert-item">
                                <h5 className='bg-secondary text-light'>Turkish (Native)</h5>
                                <h5 className='bg-secondary text-light'>English (Proficient)</h5>
                                <h5 className='bg-secondary text-light'>German (Beginner)</h5>
                            </div>
                        </div>

                        <div className="col-lg-10 d-flex">
                            <div className="col-3">
                                <h3 className="resume-title text-end">Certificates:</h3>
                            </div>
                            <div className="col-9 pt-2 sum cert-item">
                                <Link sx={{ textDecoration: 'none', color: 'black', }} href='https://verified.sertifier.com/en/verify/38943971263518' target='_blank'><h5 className='shdw'>HTML & CSS</h5></Link>
                                <Link sx={{ textDecoration: 'none', color: 'black', }} href='https://verified.sertifier.com/en/verify/97432029031016' target='_blank'><h5 className='shdw'>JavaSript</h5></Link>
                                <Link sx={{ textDecoration: 'none', color: 'black', }} href='https://www.linkedin.com/learning/certificates/b0e1dd985e6b5a8a07d47fa26add535d340a0a9c85573287b72271e73b0258fd' target='_blank'><h5 className='shdw'>TypeScript</h5></Link>
                                <Link sx={{ textDecoration: 'none', color: 'black', }} href='https://www.linkedin.com/learning/certificates/7067e4000f4d5975feee851c9e5df8cc86cd4da826cc6dbdb3a441099e29bc3b' target='_blank'><h5 className='shdw'>React</h5></Link>
                                <Link sx={{ textDecoration: 'none', color: 'black', }} href='https://www.linkedin.com/learning/certificates/c79a0e57d1b40a248f6dea8f42bf58fe48b85f3082c3cbd599199fa9d5576b54' target='_blank'><h5 className='shdw'>Angular</h5></Link>
                                <Link sx={{ textDecoration: 'none', color: 'black', }} href='https://www.linkedin.com/learning/certificates/8dddc3c336e8bbe41867023d9387b0b2540cca490bb1bc2f9ec9ef3a9d73c749' target='_blank'><h5 className='shdw'>Node.js</h5></Link>
                                <Link sx={{ textDecoration: 'none', color: 'black', }} href='https://www.linkedin.com/learning/certificates/9f415cca81e4b087c74091413e463c737a4644c5ac3ccce69319baa8736d8fd9' target='_blank'><h5 className='shdw'>MongoDB</h5></Link>
                                <Link sx={{ textDecoration: 'none', color: 'black', }} href='https://www.linkedin.com/learning/certificates/0239a94a8910736bef51bca0dd3e5490954d1f6657e343adc145b66a0eeab935' target='_blank'><h5 className='shdw'>Figma</h5></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume