import React from 'react';

const Contact = () => {
    return (
        <section className='text-center mt-28 p-32 contact'>
            <div className='my-14'>
                <h3 className="text-xl text-primary font-bold">Contact Us</h3>
                <h2 className="text-4xl">Stay Connected With us</h2>
            </div>
            <div className=''>
                <input type="text" placeholder="Email" class="input input-bordered w-96 my-3 h-12" /><br />
                <input type="text" placeholder="subject" class="input input-bordered w-96 h-12 my-3" /><br />
                <input type="text" placeholder="Your Message" class="input input-bordered w-96  h-32 my-3" /><br />
            </div>
            <button className="btn btn-primary mt-14">Submit</button>
        </section>
    );
};

export default Contact;