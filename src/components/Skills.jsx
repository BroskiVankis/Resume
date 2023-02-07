import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import img from "../assests/images/meter1.svg";
import bg from "../assests/images/banner-bg.png";

function Skills() {
    return (
        <>
        <div style={{backgroundImage: `url(${img})`}} className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4">
            <div className="skills-wrapper text-center text-white bg-black p-10 rounded-[50pc] lg:p-2">
                <h1 className="text-4x1 ">Skills</h1>
                <p className="text-lg py-3">
                    Those are the skills i have learned by far as a developer
                </p>
                <div className="box flex justify-between items-center bg-black my-6">
                    <Swiper
                     slidesPerView={3} 
                     spaceBetween={40} 
                     pagination={{
                        clickable: true,
                    }}
                     navigation={true} 
                     modules={[Navigation, Pagination]}
                     className="mySwiper "
                    >
                        <SwiperSlide>
                            {" "}
                            <div className="">
                                <img src={img} alt="img" />
                                <h1 className="font-bold text-2x1 my-2">Web Dev</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <div className="">
                                <img src={img} alt="img" />
                                <h1 className="font-bold text-2x1 my-2">Frontend</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <div>
                                <img src={img} alt="" />
                                <h1 className="font-bold text-2xl my-2">React.js</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <div>
                                <img src={img} alt="" />
                                <h1 className="font-bold text-2xl my-2">Javascript</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <div>
                                <img src={img} alt="" />
                                <h1 className="font-bold text-2xl my-2">Tailwind</h1>
                            </div>
                        </SwiperSlide>
                    </Swiper> 
                </div>
            </div>
        </div>
        </>
    );
}

export default Skills;