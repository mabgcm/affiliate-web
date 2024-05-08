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
import { FaShopify, FaBitcoin, FaAffiliatetheme } from 'react-icons/fa';
import { GiInspiration } from "react-icons/gi";
import { TbZoomMoney } from "react-icons/tb";


const Home = () => {

    const settings = {
        dots: false, // Show dot indicators
        infinite: true, // Infinite looping
        // speed: 1000, // Animation speed
        slidesToShow: 4, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: true, // Add this line to enable autoplay
        autoplaySpeed: 2000, // Adjust the speed as needed
        arrows: false,
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
                    vertical: true,
                    verticalSwiping: true,
                    rows: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    vertical: true,
                    verticalSwiping: true,
                    rows: 2,
                }
            }
        ]
    };

    return (
        <div>
            <section className="introBlock d-flex w-100 h-100 bgCover text-center position-relative text-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="alignHolder w-100 d-flex align-items-center">
                    <div className="align w-100 pt-10 pt-md-60 pt-lg-60 pt-xl-60 pb-3 pb-md-10 mt-10 mt-md-60 mt-lg-60 mt-xl-60" >
                        <div className="container position-relative">
                            <div className="mxterWrap mx-auto">
                                <div className="wow fadeInDown">
                                    <h1 className="text-white text-uppercase mb-3">
                                        <span className="d-block headingTitle mb-1 font3">Free Your Future</span>
                                        <span className="d-block">Master The Game of Money</span>
                                    </h1>
                                </div>
                                <div>
                                    <strong className='fontFourth'>Step into the world of self-learning and unlock the secrets to financial independence. Dive into our courses and explore the blog for invaluable tips and tricks.</strong>
                                </div>
                                <a href="/skills" className="btn btnTheme position-relative border-0 p-0 mt-4 wow bounceIn" data-wow-delay="1s" data-hover="Discover Now!">
                                    <span className="d-block btnText">Discover Now!</span>
                                </a>
                            </div>
                            <div className='position-relative catsWrap mx-auto mt-6 mt-md-0 wow flipInX'>
                                <strong className='arrowTag arrowTag01 fontThird mb-4 mb-md-0 d-block'>
                                    Popular Blogposts
                                    <span className='artgArrow1 position-absolute d-none d-md-block'><img src={arrow} alt="" /></span>
                                </strong>
                                <div className='row d-block mt-md-14'>
                                    <div className="ourCategorySlider">
                                        <div>
                                            <div className="col-12 mb-0">
                                                <Slider {...settings}>
                                                    <div className="catBoxColumn position-relative rounded d-flex align-items-center justify-content-center w-100 mb-6 mr-2">
                                                        <div className="alignHolder d-flex w-100 align-items-center">
                                                            <div className="align w-100">
                                                                <i className="icnWrap d-flex align-items-center justify-content-center fi mb-3">
                                                                    <FaShopify size={70} />
                                                                    <span className="sr-only">icon</span></i>
                                                                <h2 className="text-white mb-0">
                                                                    <a href="/blogpost/K6I1kOCHbbWKBNQ9Q8hn">Dominating the Digital Marketplace with Shopify</a>
                                                                </h2>
                                                                <strong className="cbcTag position-absolute bg-warning text-white rounded font-weight-normal">New</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="catBoxColumn position-relative rounded d-flex align-items-center justify-content-center w-100 mb-6">
                                                        <div className="alignHolder d-flex w-100 align-items-center">
                                                            <div className="align w-100">
                                                                <i className="icnWrap d-flex align-items-center justify-content-center fi mb-3">
                                                                    <TbZoomMoney size={70} /><span className="sr-only">icon</span></i>
                                                                <h2 className="text-white mb-0">
                                                                    <a href="/blogpost/1x4uMI7IziNJjmPH7YqK">10 In-Demand Online Skills You Can Monetize Right Now</a>
                                                                </h2>
                                                                <strong className="cbcTag position-absolute bg-warning text-white rounded font-weight-normal">New</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="catBoxColumn position-relative rounded d-flex align-items-center justify-content-center w-100 mb-6">
                                                        <div className="alignHolder d-flex w-100 align-items-center">
                                                            <div className="align w-100">
                                                                <i className="icnWrap d-flex align-items-center justify-content-center fi mb-3"><GiInspiration size={70} /><span className="sr-only">icon</span></i>
                                                                <h2 className="text-white mb-0">
                                                                    <a href="/blogpost/fI2geK8bp4VkkINFRCES">Financial Freedom: A Journey Not Just for the Rich and Famous</a>
                                                                </h2>
                                                                <strong className="cbcTag position-absolute bg-success text-white rounded font-weight-normal">Popular</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="catBoxColumn position-relative rounded d-flex align-items-center justify-content-center w-100 mb-6">
                                                        <div className="alignHolder d-flex w-100 align-items-center">
                                                            <div className="align w-100">
                                                                <i className="icnWrap d-flex align-items-center justify-content-center fi mb-3"><FaBitcoin size={70} /><span className="sr-only">icon</span></i>
                                                                <h2 className="text-white mb-0">
                                                                    <a href="/blogpost/KbAFNPl7m5UPs2KEfLAf">The Top 10 Cryptocurrency Trading Simulators</a>
                                                                </h2>
                                                                <strong className="cbcTag position-absolute bg-purple text-white rounded font-weight-normal">Extra</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="catBoxColumn position-relative rounded d-flex align-items-center justify-content-center w-100 mb-6">
                                                        <div className="alignHolder d-flex w-100 align-items-center">
                                                            <div className="align w-100">
                                                                <i className="icnWrap d-flex align-items-center justify-content-center fi mb-3"><FaAffiliatetheme size={70} /><span className="sr-only">icon</span></i>
                                                                <h2 className="text-white mb-0">
                                                                    <a href="/blogpost/pSenpExOkTaPVKGTPYAj">What Is Affiliate Marketing and How Does It Work?</a>
                                                                </h2>
                                                                <strong className="cbcTag position-absolute bg-danger text-white rounded font-weight-normal">Value</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Slider>
                                            </div>
                                        </div>
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