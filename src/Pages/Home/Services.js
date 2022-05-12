import React from 'react';

import Fluoride from "../../assets/images/fluoride.png"
import Cavity from '../../assets/images/cavity.png';
import white from '../../assets/images/whitening.png';
import Treat from '../../assets/images/treatment.png';
import Service from './Service';
import MakeAppointment from './MakeAppointment';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Floraide Treatment',
            description: '',
            img: Fluoride
        },

        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: Cavity
        },

        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: white
        }
    ]
    return (
        <div className='my-28'>
            <div className="text-center">

                <h3 className='text-primary font-bold uppercase text-xl'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
                <div className='contents'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        {
                            services.map(service => <Service key={service._id} service={service}></Service>)
                        }
                    </div>
                </div>

            </div>
            <div class="hero min-h-screen px-20">
                <div class="hero-content flex-col lg:flex-row gap-28">
                    <img src={Treat} class="max-w-sm rounded-lg" />
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat doloribus ratione aliquam dolor quasi cumque ea magni ducimus, possimus, sapiente illum at culpa magnam temporibus quis id incidunt omnis quibusdam deleniti consectetur eaque, reprehenderit laudantium. Sequi earum aliquid, accusamus suscipit nobis, neque pariatur expedita animi aspernatur vitae necessitatibus vel ab odit consequatur ducimus nostrum. Velit architecto eos labore distinctio!</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Services;