'use client'

import { Card, Button } from 'flowbite-react';
import { BsFillCloudDownloadFill } from 'react-icons/bs';

export default function CardSummary(props) {
  return (
    <Card
      className="max-w-2xl mt-6"
      href="#"
    >
      <h6 className="m-0 text-base font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Waktu
        </p>
      </h6>

      <div className='grid grid-cols-2 gap-2'>
        <h4 className='text-xl tracking-tight text-gray-600 dark:text-white'>
              Hari
        </h4>
        <h4 className='text-xl font-bold tracking-tight text-gray-600 dark:text-white'>
            {props.timeDay ? props.timeDay : '-'}
        </h4>
      </div>

      <div className='grid grid-cols-2 gap-2'>
        <h4 className='text-xl tracking-tight text-gray-600 dark:text-white'>
              Tanggal
        </h4>
        <h4 className='text-xl font-bold tracking-tight text-gray-600 dark:text-white'>
            {props.timeDate ? props.timeDate : '-'}
        </h4>
      </div>

      <div className='grid grid-cols-2 gap-2'>
        <h4 className='text-xl tracking-tight text-gray-600 dark:text-white'>
              Pukul
        </h4>
        <h4 className='text-xl font-bold tracking-tight text-gray-600 dark:text-white'>
            {props.timeClock ? props.timeClock : '-'}
        </h4>
      </div>

      <h6 className="m-0 text-base font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Ringkasan
        </p>
      </h6>

      <div className='grid grid-cols-2 gap-2'>
        <h4 className='text-xl tracking-tight text-gray-600 dark:text-white'>
              Rerata Temperatur Ambient
        </h4>
        <h4 className='text-xl font-bold tracking-tight text-gray-600 dark:text-white'>
            28 <span className='font-normal'>°C</span>
        </h4>
      </div>

      <div className='grid grid-cols-2 gap-2'>
        <h4 className='text-xl tracking-tight text-gray-600 dark:text-white'>
              Rerata Temperatur Dalam
        </h4>
        <h4 className='text-xl font-bold tracking-tight text-gray-600 dark:text-white'>
            -13 <span className='font-normal'>°C</span>
        </h4>
      </div>

      <div className='grid grid-cols-2 gap-2'>
        <h4 className='text-xl tracking-tight text-gray-600 dark:text-white'>
              Rerata RH Dalam
        </h4>
        <h4 className='text-xl font-bold tracking-tight text-gray-600 dark:text-white'>
            72 <span className='font-normal'>%</span>
        </h4>
      </div>

      <div className='grid grid-cols-2 gap-2'>
        <h4 className='text-xl tracking-tight text-gray-600 dark:text-white'>
              Rerata Konsumsi Daya
        </h4>
        <h4 className='text-xl font-bold tracking-tight text-gray-600 dark:text-white'>
            434 <span className='font-normal'>Watt</span>
        </h4>
      </div>

      <div className='grid grid-cols-2 gap-2'>
        <h4 className='text-xl tracking-tight text-gray-600 dark:text-white'>
              Penghematan Daya
        </h4>
        <h4 className='text-xl font-bold tracking-tight text-gray-600 dark:text-white'>
            840 <span className='font-normal'>kWh</span>
        </h4>
      </div>

      <div className='grid grid-cols-1 gap-2'>
        <Button>
          <BsFillCloudDownloadFill className="mr-2 h-5 w-5" />
          <p>Download Data (.CSV)</p>
        </Button>
      </div>
    </Card>
  )
}