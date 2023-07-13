'use client'

import { Card, Button, Spinner } from 'flowbite-react';
import { BsFillCloudDownloadFill } from 'react-icons/bs';
import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link';

export default function CardSummary(props) {
  const [isLoading, setIsLoading] = useState(false);

  const API_URI = `${process.env.REACT_APP_API_URL}/api/download-csv`;
  const handleClick = async () => {
    setIsLoading(true);
    try {      
      let res = await fetch(API_URI, {
        method: "GET",
        mode: 'cors',
        headers: {
          "Content-Type": "application/txt"
        }
      });
      let resJson = await res.json();
      if (res.status === 200){
        setIsLoading(false);
      }
    } catch {
      setIsLoading(false);
    }
  }

  return (
    <div
      className="max-w-2xl mt-6 p-0 mb-0"
    >
      <h6 className="m-0 text-base font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Waktu
        </p>
      </h6>

      <div className='grid grid-cols-2 gap-2 mt-4'>
        <h4 className='text-xl tracking-tight text-gray-600 dark:text-white'>
              Hari
        </h4>
        <h4 className='text-xl font-bold tracking-tight text-gray-600 dark:text-white'>
            {props.timeDay ? props.timeDay : '-'}
        </h4>
      </div>

      <div className='grid grid-cols-2 gap-2 mt-4'>
        <h4 className='text-xl tracking-tight text-gray-600 dark:text-white'>
              Tanggal
        </h4>
        <h4 className='text-xl font-bold tracking-tight text-gray-600 dark:text-white'>
            {props.timeDate ? props.timeDate : '-'}
        </h4>
      </div>

      <div className='grid grid-cols-2 gap-2 mt-4'>
        <h4 className='text-xl tracking-tight text-gray-600 dark:text-white'>
              Pukul
        </h4>
        <h4 className='text-xl font-bold tracking-tight text-gray-600 dark:text-white'>
            {props.timeClock ? props.timeClock : '-'}
        </h4>
      </div>

      <div className='grid grid-cols-1 gap-2 mt-4'>
        <Link href={API_URI} target="_blank">
          <Button onClick={handleClick}>
            <div>
            {isLoading ? <Spinner /> : 'Download Data (.TXT)'}
            </div>
          </Button>
        </Link>
      </div>
    </div>
  )
}