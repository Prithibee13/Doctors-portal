import React from 'react';

import quote from "../../assets/icons/quote.svg"
import peaople1 from '../../assets/images/people1.png';
import peaople2 from "../../assets/images/people2.png";
import peapole3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => 
{
    const reviews = [
        {
            _id: 1,
            name: 'Winstone Harry',
            reveiw: '',
            location : 'Carlifonia',
            img: peaople1
        },

        {
            _id: 2,
            name: 'Winstone Harry',
            reveiw: '',
            location : 'Carlifonia',
            img: peaople2
        },

        {
            _id: 3,
            name: 'Winstone Harry',
            reveiw: '',
            location : 'Carlifonia',
            img: peapole3
        }
    ]

    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className="text-3xl">What Our Patient Say</h2>
                </div>
                <div>
                    <img src={quote} alt=""  className='w-24 lg:w-48'/>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;