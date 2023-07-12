"use client";

import { Button, Card, Spinner } from 'flowbite-react';
import Image from 'next/image';
import { useState } from 'react';
import ReactSwitch from 'react-switch';

export default function CardSwitchEvapFan(props) {
  const API_URL_SETPOINT = `${process.env.REACT_APP_API_URL}/api/switch-evap-fan`;
  const [isLoading, setIsLoading] = useState(false);

  let handleSubmit = async(e) => {   
    setIsLoading(true);
    try {      
      let res = await fetch(API_URL_SETPOINT, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',    
      });
      let resJson = await res.json();
      if (res.status === 200){
        setIsLoading(false);
        alert("Berhasil melakukan switch.");
      }
    } catch {
      setIsLoading(false);
      alert('Tidak dapat melakukan switch.')
    }
  }

  return (
    <Card
      className="max-w-sm"
      href="#"
    >
      <h6 className="m-0 text-base font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Switch Kipas Evaporator
        </p>
      </h6>

      <div className='grid grid-cols-2 gap-2'>
        <Image 
            width="64"
            height="64"
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="/icons/icon_compressor.svg"
        />
        <Button onClick={handleSubmit}>
          {isLoading ? <Spinner/> : 'Switch'}
        </Button>
      </div>

    </Card>
  )
}