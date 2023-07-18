"use client";

import Image from "next/image";
import DasborNavbar from "../dasbor-navbar";
import Footer from "../footer";

export default function Tentang() {
    return (
    <main>
      
      <DasborNavbar activelink="Tentang" />
      
      <div className="container mx-auto items-center">
        <p className="font-bold text-center text-slate-600">Acknowledgement</p>

        <div className="flex flex-row items-center justify-center mt-2 mb-4 mx-auto">
          <Image
            src={"/illustration/logo-its.png"}
            height={128}
            width={128}
            alt="Lambang ITS"
            className="mx-2"
          />
          <Image
            src={"/illustration/logo-kampusmerdeka.png"}
            height={128}
            width={128}
            alt="Lambang ITS"
            className="mx-2"
          />
          <Image
            src={"/illustration/logo-kemendikbud.png"}
            height={128}
            width={128}
            alt="Lambang ITS"
            className="mx-2"
          />
          <Image
            src={"/illustration/logo-merdekabelajar.png"}
            height={128}
            width={128}
            alt="Lambang ITS"
            className="mx-2"
          />
          <Image
            src={"/illustration/logo-pkm.png"}
            height={128}
            width={128}
            alt="Lambang ITS"
            className="mx-2"
          />
          <Image
            src={"/illustration/logo-simbelmawa.png"}
            height={128}
            width={128}
            alt="Lambang ITS"
            className="mx-2"
          />          
        </div>
        
        <p>Penelitian ini dikerjakan di Lab. MMS (Marine Machinery & Systems) <br></br>Departemen Teknik Sistem Perkapalan <br></br>Fakultas Teknologi Kelautan <br></br>Institut Teknologi Sepuluh Nopember, Surabaya<br></br>2023</p>
      
        <div className="mt-4 items-center flex-col justify-center">
          <p className="text-center">Disusun Oleh:</p>
          <ol className="text-center">
            <li>Alviansyah Maulana Iskandar</li>
            <li>NRP. 04211940000060</li>
          </ol>
        </div>
      </div>
      
      <Footer />
    </main>
    )
}