"use client";

import { Button, Card, Label, TextInput } from 'flowbite-react';
import Image from 'next/image';
import { useState } from 'react';

export default function CardSetPoint(props) {
  const API_URL_SETPOINT = `${process.env.REACT_APP_API_URL}/api/change-setpoint`;
  const [setPoint, setSetPoint] = useState(-20);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(API_URL_SETPOINT, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify({
          setpoint: setPoint
        }),                
      });
      let resJson = await res.json();
      if (res.status === 200){
        setSetPoint(-20);
        alert('Set Point: ' + setPoint);
      }
    } catch (err) {
      alert('Tidak bisa mengirim data');
    }
  }

  return (
    <Card
      className="max-w-sm"
      href="#"
    >
      <h6 className="m-0 text-base font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Tentukan Set Point
        </p>
      </h6>
      <form method='POST' onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-2'>
          <Label
              htmlFor='setpoint'                            
              value='Set Point: '
          />  
          <TextInput
              id='setpoint'
              placeholder='-20'
              required
              type='number'
              value={setPoint}
              onChange={(e) => setSetPoint(e.target.value)}
              max={20}
              min={-20}
          />
        </div>

        <div className='grid grid-cols-2 gap-2 mt-2'>
          <div></div>
          <Button type='Submit'>Kirim</Button>
        </div>
      </form>
    </Card>
  )
}