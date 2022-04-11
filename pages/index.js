import Head from 'next/head'
import Image from 'next/image'
import BackgroundParticles from '../components/BackgroundParticles'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin" />

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thresh</title>
        {/* <meta name="description" content="3D NFT Gallery" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundParticles/>
      <table>
        <tr>
          <td colSpan="2" rowSpan="2" >
            <Header />
          </td>
          <td  >
            <Header />
          </td>

        </tr>
        <tr>
          <td >
            2nd
          </td>

          <td >
            2nd
          </td>
          

        </tr>
        <tr>
          <td >
            3rd
          </td>
          

        </tr>
        <tr>
          <td >
            4th
          </td>
          

        </tr>

      </table>
    </div>
  )
}
