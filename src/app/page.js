'use client'

import DasborNavbar from "./dasbor-navbar";
import React, { useEffect, useState } from "react";
import CardStatusInside from "./card/CardStatusInside";
import CardStatusPower from "./card/CardStatusPower";
import CardStatusPCM from "./card/CardStatusPCM";
import CardStatusConventional from "./card/CardStatusConventional";
import LineChartTemperature from "./chart/LineChartTemperature";
import CardSummary from "./card/CardSummary";
import axios from "axios";

export default function Home() {
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
  const [options, setOptions] = useState({
    chart: {
      id: 'temperature-chart'
    },
    xaxis: {
      categories: ["0:34:01", "0:34:02", "0:34:03", "0:34:04", "0:34:05", "0:34:06", "0:34:07", "0:34:08"]
    }
  });
  const [series, setSeries] = useState(
    [
      {
        name: 'Inlet Evap',
        data: [-12, 31, 30, 31, 32, 33, 34, 34]
      },
      {
        name: 'Ambient',
        data: [28, 28, 29, 28, 28, 28, 29, 29]
      }
    ]
  );

  const API_URI = `${process.env.REACT_APP_API_URL}/api`;
  const [apiData, setApiData] = useState({});
  useEffect(() => {
    const interval = setInterval(() => {
      axios.get(API_URI).then((res) => {
        const newData = res.data;
        console.log(newData);
        setApiData(newData);
      })
    }, 5000);
    return () => clearInterval(interval);
  }, [apiData]);
  useEffect(() => {
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
  }, [apiData]);

  return (
    <main>
      <DasborNavbar activelink="Beranda" />
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          <CardStatusInside 
            insideTemperature={senseTh1}
          />
          <CardStatusPower />
          <CardStatusPCM />
          <CardStatusConventional />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <LineChartTemperature 
            options={options}
            series={series}
          />
          <CardSummary />
        </div>
      </div>
    </main>
  )
}
