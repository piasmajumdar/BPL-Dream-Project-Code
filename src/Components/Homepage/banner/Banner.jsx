import React from 'react';
import bg_shadow from "../../../assets/bg-shadow.png";
import banner from "../../../assets/banner-main.png";

const Banner = () => {
    return (
        <div className='min-h-[50vh] container mx-auto bg-[#131313] mt-4 rounded-2xl overflow-hidden text-center p-10 space-y-3'
            style={{ backgroundImage: `url(${bg_shadow})` }}>
            <img className='mx-auto' src={banner} alt="" />
            <h3 className='text-3xl text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
            <p className='text-gray-400 text-2xl font-semibold'>Beyond Boundaries Beyond Limits</p>
            <button className='border border-[#E7FE29] rounded-md p-1'>
                <button className='py-2 px-4 bg-[#E7FE29] rounded-md font-bold'>Claim Free Credit</button>
            </button>
        </div>
    );
};

export default Banner;