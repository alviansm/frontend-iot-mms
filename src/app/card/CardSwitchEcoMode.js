"use client";

import { Card } from 'flowbite-react';
import Image from 'next/image';
import { useState } from 'react';
import ReactSwitch from 'react-switch';

export default function CardSwitchEcoMode(props) {
  const [checked, setChecked] = useState(false);

  function handleChange() {
    setChecked(!checked);
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
        <ReactSwitch
          onChange={handleChange}
          checked={checked}
        />
      </div>

    </Card>
  )
}