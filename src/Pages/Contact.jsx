import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { Container, Paper } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact = () => {

    const notify = () =>
        toast.success("Message sent successfully!", {
            position: toast.POSITION.TOP_RIGHT
        });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h8b9y09', 'template_lmphi3c2', form.current, 'XUWBIUrOxP9PFb04C')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
    };

    return (
        <section className='mx-5 my-5 pt-5 text-center row'>
            <h1 className='mb-5 text-success'>Contact Matt</h1>
            <div className="col-sm-12 col-md-6 mb-3">
                <Container elevation={3} className='paper-info'>
                    <div class="text-start row ps-4 contact-pb">
                        <div className="col-2">
                            <PlaceIcon style={{ fontSize: '55px', color: 'white' }} className='icon' />
                        </div>
                        <div className="col-10 ps-4">
                            <h4 className='mt-3'>Location:</h4>
                            <p>Vaughan, ON, Canada</p>
                        </div>
                    </div>
                    <div class="text-start row ps-4 contact-pb">
                        <div className="col-2">
                            <MailOutlineIcon style={{ fontSize: '55px', color: 'white' }} className='icon' />
                        </div>
                        <div className="col-10 ps-4">
                            <h4 className='mt-2'>E-Mail:</h4>
                            <p>admin@mabgcm.com</p>
                        </div>
                    </div>
                    <div class="text-start row ps-4 contact-pb">
                        <div className="col-2">
                            <LocalPhoneIcon style={{ fontSize: '55px', color: 'white' }} className='icon' />
                        </div>
                        <div className="col-10 ps-4">
                            <h4 className='mt-1'>Phone:</h4>
                            <p>+1 (437) 219-6444</p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="col-sm-12 col-md-6">
                <Paper elevation={3} className='paper-contact pb-3 pt-3'>
                    <h3 className=''>Leave a Message</h3>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '90%' },
                        }}
                        noValidate
                        autoComplete="off"
                        ref={form} onSubmit={sendEmail}
                    >
                        <div>
                            <TextField
                                required
                                id="user_name"
                                name="from_name"
                                label="Your Name"
                                placeholder="Enter your name here.."
                            />
                            <TextField
                                required
                                id="email"
                                name="user_email"
                                label="Your E-mail"
                                type="email"
                                placeholder="Enter your email here.."
                            />
                            <TextField
                                id="message"
                                name="message"
                                label="Your Message"
                                multiline
                                rows={4}
                                placeholder="Default Value"
                            />
                        </div>
                        <button id='signin' onClick={notify} variant="success" type="submit" className='btn btn-success w-25'>Send</button>
                        <ToastContainer />
                    </Box>
                </Paper>
            </div>
        </section>
    )
}

export default Contact