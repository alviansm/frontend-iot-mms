"use client";

import { useState } from "react";
import CardControlCompressor from "../card/CardControlCompressor";
import CardSetPoint from "../card/CardSetPoint";
import CardSwitchEcoMode from "../card/CardSwitchEcoMode";
import CardSwitchEvapFan from "../card/CardSwitchEvapFan";
import DasborNavbar from "../dasbor-navbar";
import { Button, Card, Label, TextInput, Spinner } from 'flowbite-react';
import Image from 'next/image';
import CardRemoveData from "../card/CardRemoveData";

export default function Kontrol() {
  const API_URL_PASS = `${process.env.REACT_APP_API_URL}/api/check-password`;
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      let res = await fetch(API_URL_PASS, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify({
          password: password
        }),                
      });
      let resJson = await res.json();
      if (res.status === 200){
        alert('Kata Sandi Benar');
        setIsLoading(false);
      } else if (res.status === 401) {
        alert('Kata Sandi Salah');
        setIsLoading(false);
      }
    } catch (err) {
      alert('Tidak bisa mengirim data');
      setIsLoading(false);
    }
  } 

    return (
    <main>
      
      <DasborNavbar activelink="Kontrol" />
      
      <div className="container mx-auto">

        <div className="grid md:grid-cols-4 gap-4 grid-cols-2">

          <CardControlCompressor 
            password={password}
          />
          <CardSwitchEvapFan 
            password={password}
          />
          <CardSwitchEcoMode 
            password={password}
          />
          <CardSetPoint
            password={password}
          />

        </div>

        <div className="grid md:grid-cols-4 gap-4 grid-cols-2 my-4">

          <Card
            className="max-w-sm"
            href="#"
          >
            <h6 className="m-0 text-base font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                Cek Kata Sandi
              </p>
            </h6>
            <form method="POST" onSubmit={handleSubmit}>
              <div className='grid grid-cols-2 gap-2'>
                <Label
                    htmlFor='password'                            
                    value='Kata Sandi: '
                />  
                <TextInput
                    id='password'
                    placeholder='Kata Sandi'
                    required
                    type='text'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className='grid grid-cols-2 gap-2 mt-2'>
                <div></div>
                <Button type="Submit" color="warning">{isLoading ? <Spinner /> : 'Cek'}</Button>
              </div>
            </form>
          </Card>
          
        </div>

      </div>
    </main>
    )
}