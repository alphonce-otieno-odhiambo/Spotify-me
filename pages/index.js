import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../components/SideBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-black  h-screen overflow-hidden">
      <Head>
        <title>Spotify-me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <h1>Hello there</h1>

     <main>
       {/* sidebar */}
       <SideBar/>
       {/* center */}
       <div>
         {/* player */}
       </div>
     </main>
    </div>
  )
}
