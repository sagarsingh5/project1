'use client'
import Navbar from "./components/Navbar";
import VideoBackground from "./components/VideoBackground"
import SecondPage from './components/SecondPage'
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/ForthPage";
import FifthPage from "./components/FifthPage";

import SixthPage from "./components/SixthPage";
import Footer from "./components/Footer";
import { useState } from "react";
import Menu from "./components/Menu";


export default function Home() {
  const [showMenu, setShowMenu] =useState(false)
  return (
    <main className="">
      <Navbar onClick={() =>setShowMenu(true)} showMenu={showMenu}  />
      <Menu showMenu={showMenu} onClose={() => setShowMenu(false)}/>
      <VideoBackground />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <Footer />
      </main>
  );
}
