import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import icon1 from '../../assets/img/home2/icon/1.png';
import icon2 from '../../assets/img/home2/icon/2.png';
import videoBg from '../../assets/img/home2/video_bg.jpg';
import VideoModal from '../VideoModal';

function CoreFeature() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <VideoModal
            open={isOpen}
            onOpenChange={setOpen}
            videoId="EZ9DrY43wtw"
            title="Video"
            />
            <section className="video-fetaures-wrapper section-bg section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-12">
                            <div className="section-title">
                                <p>Core Features</p>
                                <h1>
                                    Get a Quote For <br /> Your Project
                                </h1>
                            </div>

                            <div className="features-list">
                                <div className="single-item">
                                    <div className="icon">
                                        <img src={icon1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>Building Construction</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur a dipiscing elit
                                            ullam lectus erat
                                        </p>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="icon">
                                        <img src={icon2} alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>Building Repairs</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur a dipiscing elit
                                            ullam lectus erat
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 mt-5 mt-xl-0 col-12">
                            <div
                                className="video_wrapper bg-cover d-flex align-center"
                                style={{ backgroundImage: `url(${videoBg})` }}
                            >
                                <div className="video-play-btn">
                                    <button
                                        type="button"
                                        className="play-video popup-video"
                                        onClick={() => setOpen(true)}
                                    >
                                        <FaPlay />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CoreFeature;
