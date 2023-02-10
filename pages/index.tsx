import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Howtouse from '../components/Howtouse'
import Anim from '../components/Anim'
import Cards from '../components/Cards'
import Summary from '../components/Summary'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Howtouse/>
      <Anim/>
      <Cards/>
      <Summary/>
      <Footer/>
    </>
  )
}
