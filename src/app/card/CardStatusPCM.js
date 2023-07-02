"use client";

import { Alert, Card } from 'flowbite-react';
import Image from 'next/image';

export default function CardStatusPCM(props) {
  return (
    <Card
      className="max-w-sm"
      href="#"
    >
      <h6 className="m-0 text-base font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Status PCM
        </p>
      </h6>

      <div className='grid grid-cols-2 gap-2'>
        <Image 
            width="64"
            height="64"
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="/icons/icon_encapsulation.svg"
        />
        <h4 className='text-large font-bold tracking-tight text-gray-600 dark:text-white'>
            {props.pcmTemperature1 ? `${props.pcmTemperature1} °C`: '-'} | {props.pcmTemperature2 ? `${props.pcmTemperature2} °C`: '-'}
        </h4>
      </div>

      <div className='grid grid-cols-1'>
        <Alert color="info">
          {props.pcmStatus ? `${props.pcmStatus}`: '-'}
        </Alert>
      </div>
    </Card>
  )
}