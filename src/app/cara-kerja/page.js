"use client";

import Image from "next/image";
import DasborNavbar from "../dasbor-navbar";
import Footer from "../footer";

export default function CareKerja() {
    return (
    <main>
      
      <DasborNavbar activelink="CaraKerja" />
      
      <div className="container mx-auto">

        {/* One information block */}
        <div className="flex flex-col justify-content-center">
          <p className="text-xl text-black font-bold mb-2 mt-4 text-slate-600">
            Sistem Refrigerasi Kompresi Uap
          </p>

          <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
            <Image
              src={"/illustration/phasechange.jpeg"}
              width={640}
              height={640}
              alt="ilustration of existing reefer container"
            />

            <p className="text-base">
              Phase change merupakan istilah ilmiah untuk perubahan fase seperti fenomena membeku dan mencair. Aplikasi dari material ini adalah kapasitasnya untuk menyerap dan melepaskan energi ketika berubah fase. Penggunaan PCM sebagai Thermal Energy Storage (TES) merupakan salah satu metode alternatif yang efektif untuk mengatasi kelebihan konsumsi energy dari reefer container dikarenakan karakteristik PCM yang mempunyai kemampuan untuk menyerap dan melepaskan sejumlah kalor laten berdasarkan perubahan temperatur di lingkungan sekitarnya. PCM diletakkan dalam enkapsulasi , dan selanjutnya dikombinasikan dengan sistem refrigerasi kompresi uap (Satriawan, 2022).
            </p>
          </div>

        </div>
        {/* End of one information block */}

        {/* One information block */}
        <div className="flex flex-col justify-content-center">
          <p className="text-xl text-black font-bold mb-2 mt-4 text-slate-600">
            Sistem Refrigerasi Kompresi Uap
          </p>

          <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
            <Image
              src={"/illustration/kompresi-uap.png"}
              width={640}
              height={640}
              alt="ilustration of existing reefer container"
            />

            <p className="text-base">
            Siklus refrigerasi kompresi uap banyak digunakan sebagai siklus dalam pendinginan, AC, dan heat pumps. Siklus tersebut terdiri atas 4 proses (Yount, 2017).
            <ul>
              <li>1 – 2 - Kompresi isentropik dalam kompresor.</li>
              <li>2 – 3 - Pelepasan kalor dengan tekanan konstan.</li>
              <li>3 – 4 - Kontrol tekanan menggunakan expansion valve.</li>
              <li>4 – 1 - Penyerapan kalor dalam evaporator dengan tekanan konstan.</li>
            </ul>
            </p>
          </div>

        </div>
        {/* End of one information block */}

        {/* One information block */}
        <div className="flex flex-col justify-content-center">
          <p className="text-xl text-black font-bold mb-2 mt-4 text-slate-600">
            Kontainer Berpendingin Existing
          </p>

          <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
            <Image
              src={"/illustration/kontainer-existing.png"}
              width={640}
              height={640}
              alt="ilustration of existing reefer container"
            />

            <p className="text-base">
              Kontainer berpendingin yang diusulkan memanfaatkan phase-change material untuk menyerap kalor laten untuk kemudian digunakan untuk mempertahankan temperatur dalam range tertentu ketika kompresor pada sistem refrigerasi kompresi uap mati. Agar tahap hidup mati dapat dilakukan secara otomatis, maka diperlukan suatu sistem manajemen energi.
            </p>
          </div>

        </div>
        {/* End of one information block */}

        {/* One information block */}
        <div className="flex flex-col justify-content-center">
          <p className="text-xl text-black font-bold mb-2 mt-4 text-slate-600">
            Diagram Hubungan Sinyal
          </p>

          <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
            <Image
              src={"/illustration/signal-flow.png"}
              width={640}
              height={640}
              alt="ilustration of signal flow in proposed energy management system"
            />

            <p className="text-base">
              Kontroller utama (Mega CH340) terhubung ke sensor dan aktuator atau modul output. Sensor tersebut antara lain: sensor arus; sensor temperatur; sensor kelembapan (relative humidity). Kemudian, data hasil pembacaan sinyal dikompilasi dalam satu variabel oleh kontroller utama untuk kemudian dikirimkan ke display. Hasil pembacaan sensor juga digunakan sebagai parameter charging dan discharging PCM. Sebagai monitoring on-board, data hasil pembacaan sensor juga dikirimkan ke display TFT LCD. Kemudian, kontroller utama dan kontroller slave saling mengkomunikasikan data melalui ESP32. Digunakan kontroller ESP32 karena kontroller tersebut sudah memiliki spesifikasi untuk terhubung ke internet melalui jaringan Wi-Fi. ESP32 kemudian mengirimkan data ke broker MQTT yang nantinya akan disubsribe oleh server. Terakhir, server mengkomunikasikan data dari broker MQTT ke database (MongoDB) dan client (Front-End) atau dasbor GUI ini.
            </p>
          </div>

        </div>

      </div>
      
      <DefaultFooter/>
    </main>
    )
}