"use client";

import { Button, Card, Spinner } from 'flowbite-react';
import Image from 'next/image';
import { useState } from 'react';

export default function CardRemoveData(props) {
  const API_URL_REMOVEDB = `${process.env.REACT_APP_API_URL}/remove-all-data`;
  const [isLoading, setIsLoading] = useState(false);

  let handleSubmit = async(e) => {   
    setIsLoading(true);
    try {      
      let res = await fetch(API_URL_REMOVEDB, {
        method: "post",
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify({
          password: props.password
        }),    
      });
      let resJson = await res.json();
      if (res.status === 200){
        setIsLoading(false);
        alert("Berhasil menghapus data dalam database.");
      }
      if (res.status === 503){
        setIsLoading(false);
        alert("Server lemot.");
      }
      if (res.status === 401) {
        setIsLoading(false);
        alert("Kata Sandi Salah.");
      }
    } catch {
      setIsLoading(false);
      alert('Berhasil menghapus data dalam database.')
    }
  }

  return (
    <Card
      className="max-w-sm"
      href="#"
    >
      <h6 className="m-0 text-base font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Hapus Data Database
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
        <Button onClick={handleSubmit} color="failure">
          <p>{isLoading ? <Spinner /> : 'Hapus'}</p>
        </Button>
      </div>

    </Card>
  )
}