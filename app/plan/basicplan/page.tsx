"use client"
import React from 'react';
import { ContactInput, CustomButton } from '@/components';
import { PricingDetails } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-full p-5">
      <div className="w-full flex rounded-xl lg:flex-row flex-col-reverse shadow-md justify-between h-full lg:p-9 p-4">
        {/* Left side */}
        <div className="h-full lg:w-6/12 w-full max-lg:mt-6 flex flex-col">
          <h1 className="font-bold text-lg">Payment Details</h1>
          {/* Form */}
          <form action="" className="w-full flex flex-col mt-5 gap-3">
          <label htmlFor="email">Email</label>
            <ContactInput icon='/email.svg' placeholder='Your email' type='email' name='email'/>
            <label htmlFor="creditcard">Credit Card</label>
            <ContactInput icon='/card.svg' placeholder='xxxx xxxx xxxx xxxx' type='text' name='creditcard'/>
            <label htmlFor="cvv">CVV</label>
            <ContactInput icon='/card.svg' placeholder='x x x' type='text' name='cvv'/>
            <label htmlFor="expirydate">Expiry Date</label>
            <ContactInput icon='/calendar.svg' placeholder='mm/yy' type='text' name='expirydate'/>
            <label htmlFor="monthstopay">Months To Pay</label>
            <ContactInput icon='/money.svg' placeholder='Eg:3' type='text' name='monthstopay'/>
            
            
              {PricingDetails.map((plan)=>(
                <div className='w-full flex flex-row justify-between '>
                  <p>{plan.title == 'Basic Plan' ? plan.title : null}</p>
                  <p >{plan.title == 'Basic Plan' ? ` $${plan.price} ` :null}</p>
                </div>
              ))}
              <Link href='/dashboard/customcommand'>
            <CustomButton title="Make payment" btnType="submit" containerStyles="py-6 w-full" />
          </Link>
          </form>
        </div>

        {/* Right side */}
        <div className="h-full lg:w-5/12 relative flex flex-col lg:min-h-full bg-gray-100 pb-6 rounded-3xl">
          <div className="relative w-full  h-56">
            <Image src="/gradient.png" alt="gradient" width={1000} height={1000} className="absolute w-full h-full bottom-0 top-0 right-0 rounded-t-2xl left-0" />
            {PricingDetails.map((plan) => (
              <div key={plan.title} className='w-full absolute flex items-center justify-center -bottom-1'>
                {plan.title === 'Basic Plan' && (
                  <div className="w-fit flex absolute z-40 flex-row justify-between rounded-xl gap-3 p-4 bg-white shadow-lg ">
                    <div className="w-16 h-16 rounded-md relative bg-slate-400">
                      <Image src={plan.cover} width={1000} height={1000} className=' absolute w-16 h-16 rounded-md' alt={plan.title} />
                    </div>
                    <div className="justify-center flex flex-col">
                      <p className="text-sm text-gray-500">{plan.title}</p>
                      <p className="text-md text-black font-bold">$ {plan.price}/Month</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Features */}
          <div className="w-full mt-3 p-4">
            <p className="font-bold text-md">Features</p>
            {PricingDetails.map((plan) => (
              <div className="w-full h-3/6 mb-7 px-2" key={plan.title}>
                {plan.title === 'Basic Plan' &&
                  Object.values(plan.features).map((feature, index) => (
                    <div className="w-full flex py-4 border-b gap-2" key={index}>
                      <div className="w-5 h-5 bg-indigo-600 flex items-center justify-center rounded-full">
                        <Image src="/whitecheck.svg" alt="check" width={16} height={12} />
                      </div>
                      <p className="text-sm text-gray-600">{feature}</p>
                    </div>
                  ))}
              </div>
            ))}
            <Link href="/plan">
              <p className="font-semibold underline text-sm">Change plan</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
