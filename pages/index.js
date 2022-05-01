import Head from 'next/head'
import Accessories from '../components/Accessories'
import Image from 'next/image'
import Header from '../components/Header'
import ModulS from '../components/ModulS'
import ModulX from '../components/ModulX'
import ModulY from '../components/ModulY'
import Navbar from '../components/Navbar'
import SolarPanels from '../components/SolarPanels'
import SolarRoof from '../components/SolarRoof'
// import '../styles/global.css'


export default function Home() {
  return (
    <>
  <Head>
    <title>Tesla clone</title>T
    <meta name='vieport' content='width=device-width, initial-scale=1.0'></meta>

  </Head>

     <Navbar/>
     <Header/>
     <ModulY/>
     <ModulS/>
     <ModulX/>
     <SolarPanels/>
     <SolarRoof/>
     <Accessories/>
    </>
  )
}
