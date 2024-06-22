import React from 'react'
import Meteors from './ui/meteors'

export default function Service({ eachserve }) {
    return (
        <div className='text-white flex flex-col justify-center items-center relative'>
            <h2 className='text-white text-3xl p-4 font-sans font-bold'>{eachserve.name}</h2>
            <p className=' px-12 py-5 mx-10 w-[80dvw]'>{eachserve.description}</p>
            {/* <div className="servicecards">
                <Meteors />
            </div> */}

            <div className="flex ">
                {
                    eachserve.services.map((sv, idx) => [
                        <div key={idx} className=" w-full relative max-w-xs m-5 flex flex-col">
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center items-start">
                                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                                    {sv.sname}
                                </h1>

                                <p className="font-normal text-base text-slate-400 mb-4 relative z-50 grow">
                                    {sv.sdesc}
                                </p>

                                <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                                    Explore
                                </button>

                                {/* Meaty part - Meteor effect */}
                                <Meteors number={20} />
                            </div>
                        </div>
                    ])
                }
            </div>
        </div>
    )
}
