"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar }from '@/components'; 
import { Sidebar } from '@/components';
import {Hero} from '@/components';
import {Aboutus} from '@/components'
import {Features} from '@/components'


export default function Home() {
  const [menu, setMenu] = useState(false);

  // Define the menuClick function
  const toggleMenu = () => {
    setMenu(!menu);
    
  }

  return (
    <main>
      <Navbar menuClick={toggleMenu} />
      {menu && <Sidebar menuClick={toggleMenu}/>}
      <Hero/>
      <Aboutus/>
      <Features/>
    </main>
  );
}

