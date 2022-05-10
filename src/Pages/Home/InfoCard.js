import React from 'react';

const InfoCard = (props) => {
    return (
        <div>
            <div className={`card lg:card-side bg-base-100 shadow-xl text-white p-5 ${props.bgColor}`}>
                <figure><img src={props.img} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;