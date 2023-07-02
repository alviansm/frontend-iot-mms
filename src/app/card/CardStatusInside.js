"use client";

import { Card } from 'flowbite-react';
import Image from 'next/image';

export default function CardStatusInside(props) {
  return (
    <Card
      className="max-w-sm"
      href="#"
    >
      <h6 className="m-0 text-base font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Status Dalam Kontainer
        </p>
      </h6>

      <div className='grid grid-cols-2 gap-2'>
        <Image 
            width="64"
            height="64"
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="/icons/icon_temperature.svg"
        />
        <h4 className='text-xl font-bold tracking-tight text-gray-600 dark:text-white'>
            {props.insideTemperature ? `${props.insideTemperature} °C`: '-'}
        </h4>
      </div>

      <div className='grid grid-cols-2 gap-2'>
        <Image 
            width="64"
            height="64"
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="/icons/icon_humidity.svg"
        />
        <h4 className='text-xl font-bold tracking-tight text-gray-600 dark:text-white'>
          {props.insideHumidity ? `${props.insideHumidity} %`: '-'}
        </h4>
      </div>
    </Card>
  )
}