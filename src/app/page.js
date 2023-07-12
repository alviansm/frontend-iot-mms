'use client';

import DasborNavbar from "./dasbor-navbar";
import React, { useEffect, useState } from "react";
import CardStatusInside from "./card/CardStatusInside";
import CardStatusPower from "./card/CardStatusPower";
import CardStatusPCM from "./card/CardStatusPCM";
import CardStatusConventional from "./card/CardStatusConventional";
import LineChartTemperature from "./chart/LineChartTemperature";
import CardSummary from "./card/CardSummary";
import axios from "axios";
import { Button, Modal } from "flowbite-react";
import {AiOutlineExclamationCircle} from "react-icons/ai"

export default function Home() {
  const [openModal, setOpenModal] = useState(undefined);
  const props = { openModal, setOpenModal };
  const [id, useId] = useState("");
  const [timeDay, setTimeDay] = useState("");
  const [timeDate, setTimeDate] = useState("");
  const [timeClock, setTimeClock] = useState("");
  const [senseT1, setSenseT1] = useState("");
  const [senseT2, setSenseT2] = useState("");
  const [senseT3, setSenseT3] = useState("");
  const [senseT4, setSenseT4] = useState("");
  const [senseT5, setSenseT5] = useState("");
  const [senseT6, setSenseT6] = useState("");
  const [senseT7, setSenseT7] = useState("");
  const [senseT8, setSenseT8] = useState("");
  const [senseTh1, setSenseTh1] = useState("");
  const [senseRh, setSenseRh] = useState("");
  const [senseCurrent1, setSenseCurrent1] = useState("");
  const [senseCurrent2, setSenseCurrent2] = useState("");
  const [cop, setCop] = useState("");
  const [power, setPower] = useState("");
  const [uptime, setUptime] = useState("");
  const [chargeTime, setChargeTime] = useState("");
  const [charging, setCharging] = useState("");
  const [tempArrayOfClock, setTempArrayOfClock] = useState([]);
  const [options, setOptions] = useState({    
    title: {
      text: 'Temperature Chart',
      align: 'left'
    },
    chart: {
      id: 'temperature-chart',
      type: 'line',
    },
    xaxis: {
      categories: ['16:27:45'],
      range: 30,
    },
    yaxis: {
      min: -25,
      max: 70
    },
    labels: {
      showDuplicates: true
    }
  });
  const [series, setSeries] = useState(
    [
      {
        name: 'Inlet Evaporator',
        data: []
      },
      {
        name: 'Inlet TXV',
        data: []
      },
      {
        name: 'PCM1',
        data: []
      },
      {
        name: 'Inlet Kompresor',
        data: []
      },
      {
        name: 'Inlet Kondensor',
        data: []
      },
      {
        name: 'PCM2',
        data: []
      },
    ]
  );

  const API_URI = `${process.env.REACT_APP_API_URL}/api`;
  const [apiData, setApiData] = useState({});
  useEffect(() => {
    const timer = setTimeout(() => {
      async function getApi() {
        const results = await axios.get(API_URI);
        setApiData(results.data);
      }
      getApi();
    }, 5000);
    return () => clearTimeout(timer);
  }, [apiData, API_URI]);

  useEffect(() => {
    try {
      if (Object.keys(apiData).length > 0) {
        setTimeDay(apiData.time_day);
        setTimeDate(apiData.time_date);
        setTimeClock(apiData.time_clock);
        setSenseT1(apiData.sense_t1);
        setSenseT2(apiData.sense_t2);
        setSenseT3(apiData.sense_t3);
        setSenseT4(apiData.sense_t4);
        setSenseT5(apiData.sense_t5);
        setSenseT6(apiData.sense_t6);
        setSenseT7(apiData.sense_t7);
        setSenseT8(apiData.sense_t8);
        setSenseTh1(apiData.sense_th1);
        setSenseRh(apiData.sense_rh);
        setSenseCurrent1(apiData.sense_current1);
        setSenseCurrent2(apiData.sense_current2);
        setCop(apiData.cop);
        setPower(apiData.power);
        setUptime(apiData.uptime);
        setChargeTime(apiData.charging_time);
        setCharging(apiData.charging);
        // update series
        // T1
        let temp_series = [...series];
        let temp_element_temperature_1 = {...temp_series[0]};
        if (senseT1.length > 0) {
          temp_element_temperature_1["data"].push(senseT1);
        }      
        temp_series[0] = temp_element_temperature_1;
        setSeries(temp_series);
        // T2
        let temp_series_2 = [...series];
        let temp_element_temperature_2 = {...temp_series_2[1]};
        if (senseT2.length > 0) {
          temp_element_temperature_2["data"].push(senseT2);
        }
        temp_series_2[1] = temp_element_temperature_2;
        setSeries(temp_series_2);
        // T3
        let temp_series_3 = [...series];
        let temp_element_temperature_3 = {...temp_series_3[2]};
        if (senseT3.length > 0) {
          temp_element_temperature_3["data"].push(senseT3);
        }
        temp_series_3[2] = temp_element_temperature_3;
        setSeries(temp_series_3);
        // T4
        let temp_series_4 = [...series];
        let temp_element_temperature_4 = {...temp_series_4[3]};
        if (senseT4.length > 0) {
          temp_element_temperature_4["data"].push(senseT4);
        }
        temp_series_4[3] = temp_element_temperature_4;
        setSeries(temp_series_4);
        // T5
        let temp_series_5 = [...series];
        let temp_element_temperature_5 = {...temp_series_5[4]};
        if (senseT6.length > 0) {
          temp_element_temperature_5["data"].push(senseT6);
        }
        temp_series_5[4] = temp_element_temperature_5;
        setSeries(temp_series_5);
        // T6
        let temp_series_6 = [...series];
        let temp_element_temperature_6 = {...temp_series_6[5]};
        if (senseT7.length > 0) {
          temp_element_temperature_6["data"].push(senseT7);
        }
        temp_series_6[5] = temp_element_temperature_6;
        setSeries(temp_series_6);
        
        // update categories
        console.log(timeClock); 
        if (timeClock.length > 0) {
          console.log([...options.xaxis.categories, timeClock]);
          setOptions({
            ...options,
            xaxis: {
              ...options.xaxis,
              categories: [...options.xaxis.categories, timeClock]
            }
          });
        }
  
        // clear api data after it's use
        setApiData({});
      }
    } catch {
      
    }
  }, [apiData, options, senseT1, senseT2, senseT3, senseT4, senseT5, senseT6, senseT7, series, timeClock]);

  return (
    <main suppressHydrationWarning>
      <DasborNavbar activelink="Beranda" />

      <div className="container mx-auto">

        <div className="grid md:grid-cols-4 gap-4 grid-cols-2">
          <CardStatusInside 
            insideTemperature={senseTh1}
            insideHumidity={senseRh}
          />
          <CardStatusPower
            compressorPower={power}
            evaporatorFanCurrent={senseCurrent1}
          />
          <CardStatusPCM
            pcmTemperature1={senseT3}
            pcmTemperature2={senseT7}
            pcmStatus={"Charging"}
          />
          <CardStatusConventional
            refrigerationStatus={"Idle"}
            uptime={uptime}
          />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {(typeof window !== 'undefined') &&
          <LineChartTemperature 
            options={options}
            series={series}
          />
          }
          <CardSummary 
            timeDay={timeDay}
            timeDate={timeDate}
            timeClock={timeClock}
          />
        </div>

      </div>
    </main>
  )
}
