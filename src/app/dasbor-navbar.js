"use client";

import Link from "next/link";
import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import {FaGithubAlt} from "react-icons/fa"
import { AiFillNotification } from "react-icons/ai";

const DasborNavbar = (props) => {
    return (
      <Navbar
      fluid
      rounded
      >
        <Navbar.Brand href="/">
          <Image 
            width="48"
            height="48"
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="/favicon.svg"
          />
          <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Dasbor Kontainer
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="mx-2 px-0 py-0" pill gradientMonochrome="info">
            <AiFillNotification className="mr-2 h-5 w-5" />
          </Button>
          <Button className="p-0">
            <Link className="p-0 m-0" href={"https://github.com/alviansm/frontend-iot-mms"} target="_blank">
              <FaGithubAlt className="mr-2 h-5 w-5" />
            </Link>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={props.activelink === "Beranda" ? "true" : ""}>
            <Link href="/"><p>Monitoring</p></Link>
          </Navbar.Link>
          <Navbar.Link active={props.activelink === "Kontrol" ? "true" : ""}>
            <Link href="/kontrol"><p>Kontrol</p></Link>
          </Navbar.Link>
          <Navbar.Link active={props.activelink === "CaraKerja" ? "true" : ""}>
            <Link href="/cara-kerja"><p>Cara Kerja</p></Link>
          </Navbar.Link>
          <Navbar.Link active={props.activelink === "Tentang" ? "true" : ""}>
          <Link href="/tentang"><p>Tentang</p></Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default DasborNavbar;