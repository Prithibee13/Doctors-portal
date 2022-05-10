import React from 'react';
import chair from "../../../assets/images/chair.png"

const Banner = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen px-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="chair" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts here</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quod voluptates sequi dicta earum eaque hic, saepe, sit ipsam repellat quibusdam pariatur. Ipsa sunt placeat ut ab molestiae temporibus cupiditate.</p>
                        <button className="btn btn-primary font-bold text-white uppercase bg-gradient-to-r from-secondary to-primary ">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;