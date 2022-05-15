import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import BackgroundParticles from '../components/BackgroundParticles'
import Header from '../components/Header'
import RoadMap from '../components/RoadMap'
import styles from '../styles/Home.module.css'

<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin" />

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thresh</title>
        <meta name="description" content="3D NFT Gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <BackgroundParticles />

      <Header />

      <About />

      <RoadMap />

    </div>
  )
}
