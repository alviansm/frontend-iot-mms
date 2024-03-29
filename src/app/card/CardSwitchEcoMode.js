"use client";

import { Button, Card, Spinner } from 'flowbite-react';
import Image from 'next/image';
import { useState } from 'react';

export default function CardSwitchEcoMode(props) {
  const API_URL_SETPOINT = `${process.env.REACT_APP_API_URL}/api/switch-eco`;
  const [isLoading, setIsLoading] = useState(false);

  let handleSubmit = async(e) => {   
    setIsLoading(true);
    try {      
      let res = await fetch(API_URL_SETPOINT, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',  
        body: JSON.stringify({
          password: props.password
        }),     
      });
      let resJson = await res.json();
      if (res.status === 200){
        setIsLoading(false);
        alert("Berhasil melakukan switch.");
      }
      if (res.status === 401) {
        setIsLoading(false);
        alert("Kata Sandi Salah.");
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
          Switch Mode Eco
        </p>
      </h6>

      <div className='grid grid-cols-2 gap-2'>
        <Image 
            width="64"
            height="64"
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="/icons/icon_mode_eco.svg"
        />
        <Button onClick={handleSubmit}>
          <div>{isLoading ? <Spinner/> : 'Switch'}</div>
        </Button>
      </div>

    </Card>
  )
}