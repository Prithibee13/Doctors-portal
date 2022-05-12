import React from 'react';
import doctor from '../../assets/images/doctor-small.png';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center appointment my-28'>
            <div className='flex-1'>
                <img src={doctor} alt=""  className='mt-[-100px]'/>
            </div>
            <div className='flex-1 hidden lg:block'>
                <h3 className='text-xl text-primary font-bold' >Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam aliquid natus recusandae ullam nihil at vel eligendi, dolore minus non odit reprehenderit eveniet reiciendis optio ipsam voluptas esse repellendus porro deserunt dolorum! Cumque ratione in quidem enim repellendus veniam neque?</p>
            </div>
        </section>
    );
};

export default MakeAppointment;