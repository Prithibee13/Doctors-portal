import React from 'react';
import InfoCard from './InfoCard';

import Clock from "../../assets/icons/clock.svg";
import marker from '../../assets/icons/marker.svg';
import phone from "../../assets/icons/phone.svg"

const Info = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-5">
                <InfoCard img={Clock} bgColor = 'bg-gradient-to-r from-secondary to-primary'></InfoCard>
                <InfoCard img={marker } bgColor = 'bg-accent'></InfoCard>
                <InfoCard img={phone} bgColor = 'bg-gradient-to-r from-secondary to-primary' ></InfoCard>
            </div>

        </div>
    );
};

export default Info;