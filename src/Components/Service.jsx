import React from 'react'
import Meteors from './ui/meteors'

export default function Service({ eachserve }) {
    return (
        <div className='text-black dark:text-white flex flex-col justify-center items-center relative'>
            <h2 className='text-black dark:text-white text-2xl md:text-3xl p-6 font-sans font-bold'>{eachserve.name}</h2>
            <p className=' md:px-12 md:py-5 mx-10 w-[80dvw] text-lg md:text-2xl'>{eachserve.description}</p>
            {/* <div className="servicecards">
                <Meteors />
            </div> */}

            <div className="grid grid-cols-1 grid-rows-3 md:flex md:flex-wrap md:justify-center">
                {
                    eachserve.services.map((sv, idx) => [
                        <div key={idx} className=" w-full relative max-w-xs m-5 flex flex-col z-0">
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                            <div className="relative shadow-xl bg-gray-200 dark:bg-gray-900 border border-gray-200 dark:border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                                <h1 className="font-bold text-xl text-black dark:text-white mb-4 relative z-50">
                                    {sv.sname}
                                </h1>

                                <p className="font-normal text-base text-slate-800 dark:text-slate-400 mb-4 relative z-50 grow">
                                    {sv.sdesc}
                                </p>

                                <button className="border px-4 py-1 rounded-lg border-gray-800 dark:border-gray-500 text-gray-800 dark:text-gray-300">
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
