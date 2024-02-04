import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

// import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css'

import Province from '../data/dataProvinces';
import OurServices from '../data/dataServices';
import { content } from '../data/dataContactForm';

export default function ContactUsModal ({hide} , props) {
  
  const lang = props.language === "Indonesia" ? (content.Indonesia) : (content.English);
  
  AOS.init();
  
    return (
    <>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6 mt-36">
              <div className="relative flex flex-col w-full bg-orange-100 border-0 rounded-lg shadow-lg outline-none focus:outline-none " data-aos="fade-down">
                <div className="relative flex-auto p-4">                 
                  <form className='flex flex-wrap text-left md:pt-10 xl:p-18 lg:p-12' action="https://formsubmit.co/admin@bcsvisa.com" method="POST">
                        <div className='w-full p-2'>
                            <h5 className="mb-2 text-4xl tracking-tight text-center text-gray-900 text-bold">{lang.title}</h5>
                                
                        </div>

                        <div className='w-1/2 p-2'>
                            <div className="relative">
                              <label htmlFor="name" className="text-sm leading-7 text-gray-600">{lang.name}</label>
                              <input placeholder='' type="text" id="name" name="name" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border-2 rounded-lg outline-none border-neutral-500 focus:border-red-500"/>
                            </div>
                        </div>      

                        <div className="w-1/2 p-2">
                            <div className="relative">
                              <label htmlFor="tel" className="text-sm leading-7 text-gray-600">{lang.phone}</label>
                              <input
                                placeholder='Ex. +6281807082004'
                                type="tel"
                                id="tel"
                                name="phone_number"
                                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border-2 rounded-lg outline-none border-neutral-500 focus:border-red-500"
                              />
                              {/* <IntlTelInput preferredCountries={['id']} className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border-2 rounded-lg outline-none border-neutral-500 focus:border-red-500"/> */}
                            </div>
                        </div>
                        
                        <div className="w-full p-2">
                            <div className="relative">
                              <label htmlFor="email" className="text-sm leading-7 text-gray-600">{lang.email}</label>
                              <input
                                placeholder='Ex. admin@bcsvisa.com'
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border-2 rounded-lg outline-none border-neutral-500 focus:border-red-500"
                              />
                            </div>
                        </div>

                        

                        <div className="w-1/2 p-2">
                            <div className="relative">
                                <label htmlFor="services" className="text-sm leading-7 text-gray-600">{lang.province}</label>
                                <select name="services" id="services" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border-2 rounded-lg outline-none border-neutral-500 focus:border-red-500">
                                    <option value="" disabled>--Select your province--</option>
                                    {Province.map((item,key) => {
                                      return(
                                        <option value={item.name} key={key}>{item.name}</option>
                                      )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                                <label htmlFor="services" className="text-sm leading-7 text-gray-600">{lang.services}</label>
                                <select name="services" id="services" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border-2 rounded-lg outline-none border-neutral-500 focus:border-red-500">
                                    <option value="" disabled>--Please Choose an Option--</option>
                                    {OurServices.map((item,key) => {
                                      return(
                                        <option value={item.services} key={key}>{item.services}</option>
                                      )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="w-full p-2">
                                <div className="relative">
                                <label htmlFor="message" className="text-sm leading-7 text-gray-600">{lang.help}</label>
                                <textarea placeholder='' id="message"name="message" className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border-2 rounded-lg outline-none border-neutral-500 focus:border-red-500"></textarea>
                                </div>
                        </div>
                        <div className="w-full p-2">
                            <input type="hidden" name="_gotcha" className="hidden"></input>
                            <button type="submit"
                            className="flex mx-auto text-lg rounded submit focus:outline-none">
                            Submit
                            </button>
                        </div>
                  </form>

                </div>
                <div className="flex items-center justify-start p-4 border-t border-orange-200 border-solid rounded-b md:justify-end">
                  <button className="text-xs font-bold text-red-500 uppercase outline-none background-transparent focus:outline-none hover:text-red-500" type="button" onClick={hide}>
                    Close
                  </button>
                </div>
              </div>
            </div>
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>

  )}
