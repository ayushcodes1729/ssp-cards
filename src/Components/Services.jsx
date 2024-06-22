import React from 'react'
import service from "../services.json"
import Service from './Service'
// import MeteorsDemo from './Meteorsdemo'


export default function Services() {
    return (
        <div className=' bg-black flex flex-col justify-center items-center'>
            <h1 className=' text-white text-5xl font-sans font-bold p-6'>Our Services</h1>
            {service.map((each) => (
                <Service key={each.id} eachserve={each} />
            ))}
        </div>
    )
}
