import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/bootstrap.css'
import '../assets/css/style.css'
import '../assets/css/colors.css'
import '../assets/css/responsive.css'
import backgroundImage from '../assets/img/background.jpg'
import arrow from '../assets/img/arrow1.png'

const Home = () => {

    const settings = {
        dots: true, // Show dot indicators
        infinite: true, // Infinite looping
        speed: 1000, // Animation speed
        slidesToShow: 4, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div>
            <section className="introBlock d-flex w-100 bgCover text-center position-relative text-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="alignHolder w-100 d-flex align-items-center">
                    <div className="align w-100 pt-20 pt-md-24 pt-lg-30 pt-xl-38 pb-3 pb-md-10">
                        <div className="container position-relative">
                            <div className="mxterWrap mx-auto">
                                <div className="wow fadeInDown">
                                    <h1 className="text-white text-uppercase mb-3">
                                        <span className="d-block headingTitle mb-1">Learn with us</span>
                                        <span className="d-block">Study with experts</span>
                                    </h1>
                                </div>
                                <div className="wow fadeInDown" data-wow-delay="0.5s">
                                    <p>This should be used to tell a story and let your users know a little more about your product or service. How can you benefit them?</p>
                                </div>
                                <a href="#" className="btn btnTheme position-relative border-0 p-0 mt-4 wow bounceIn" data-wow-delay="1s" data-hover="Grab Your Course">
                                    <span className="d-block btnText">Grab Your Course</span>
                                </a>
                            </div>
                            <div className='position-relative catsWrap mx-auto mt-6 mt-md-0 wow flipInX'>
                                <strong className='arrowTag arrowTag01 fontThird mb-4 mb-md-0 d-block'>
                                    We provide many types of courses
                                    <span className='artgArrow1 position-absolute d-none d-md-block'><img src={arrow} alt="" /></span>
                                </strong>
                                <div className='row d-block mt-md-14'>
                                    <div className="ourCategorySlider">
                                        <div>
                                            <div className="col-12">
                                                <Slider {...settings}>
                                                    <div className="catBoxColumn position-relative rounded d-flex align-items-center justify-content-center w-100 mb-6 mr-2">
                                                        <div className="alignHolder d-flex w-100 align-items-center">
                                                            <div className="align w-100">
                                                                <i className="icnWrap d-flex align-items-center justify-content-center fi mb-3 flaticon-internet"><span className="sr-only">icon</span></i>
                                                                <h2 className="text-white mb-0">
                                                                    <a href="#">Data Analysis</a>
                                                                </h2>
                                                                <strong className="cbcTag position-absolute bg-purple text-white rounded font-weight-normal">+15</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="catBoxColumn position-relative rounded d-flex align-items-center justify-content-center w-100 mb-6">
                                                        <div className="alignHolder d-flex w-100 align-items-center">
                                                            <div className="align w-100">
                                                                <i className="icnWrap d-flex align-items-center justify-content-center fi mb-3 flaticon-internet"><span className="sr-only">icon</span></i>
                                                                <h2 className="text-white mb-0">
                                                                    <a href="#">Web Dev</a>
                                                                </h2>
                                                                <strong className="cbcTag position-absolute bg-purple text-white rounded font-weight-normal">+15</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="catBoxColumn position-relative rounded d-flex align-items-center justify-content-center w-100 mb-6">
                                                        <div className="alignHolder d-flex w-100 align-items-center">
                                                            <div className="align w-100">
                                                                <i className="icnWrap d-flex align-items-center justify-content-center fi mb-3 flaticon-internet"><span className="sr-only">icon</span></i>
                                                                <h2 className="text-white mb-0">
                                                                    <a href="#">Cyber</a>
                                                                </h2>
                                                                <strong className="cbcTag position-absolute bg-purple text-white rounded font-weight-normal">+15</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="catBoxColumn position-relative rounded d-flex align-items-center justify-content-center w-100 mb-6">
                                                        <div className="alignHolder d-flex w-100 align-items-center">
                                                            <div className="align w-100">
                                                                <i className="icnWrap d-flex align-items-center justify-content-center fi mb-3 flaticon-internet"><span className="sr-only">icon</span></i>
                                                                <h2 className="text-white mb-0">
                                                                    <a href="#">Crypto</a>
                                                                </h2>
                                                                <strong className="cbcTag position-absolute bg-purple text-white rounded font-weight-normal">+15</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="catBoxColumn position-relative rounded d-flex align-items-center justify-content-center w-100 mb-6">
                                                        <div className="alignHolder d-flex w-100 align-items-center">
                                                            <div className="align w-100">
                                                                <i className="icnWrap d-flex align-items-center justify-content-center fi mb-3 flaticon-internet"><span className="sr-only">icon</span></i>
                                                                <h2 className="text-white mb-0">
                                                                    <a href="#">Affiliate</a>
                                                                </h2>
                                                                <strong className="cbcTag position-absolute bg-purple text-white rounded font-weight-normal">+15</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Slider>

                                            </div>
                                        </div>
                                        {/* Additional slides go here */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            {/* More sections can be added here following the same pattern */}
        </div>
    );
}

export default Home;