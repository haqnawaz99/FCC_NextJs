import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
        <img src="" alt="" />
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/about-us">About Us</a>
        </nav>
      </header>
      <main className={styles.main}>

        {data.map((ev) => (
          <a key={ev.id} href={`events/${ev.id}`}>
            <Image width={200} height={200}
            alt={ev.title} src={ev.image}/> 
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
        ))}

        {/* <a href="/events/london">
          <img src="" alt="" />
          <h2>Events in London</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione temporibus cumque, praesentium quod quia voluptatum laborum, consequuntur earum accusantium, beatae aperiam ducimus perferendis repellat nihil provident ullam repudiandae illum.</p>
        </a>

        <a href="/events/San">
          <img src="" alt="" />
          <h2>Events in San Francisco</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione temporibus cumque, praesentium quod quia voluptatum laborum, consequuntur earum accusantium, beatae aperiam ducimus perferendis repellat nihil provident ullam repudiandae illum.</p>
        </a>

        <a href="/events/Barc">
          <img src="" alt="" />
          <h2>Events in Barcelona</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione temporibus cumque, praesentium quod quia voluptatum laborum, consequuntur earum accusantium, beatae aperiam ducimus perferendis repellat nihil provident ullam repudiandae illum.</p>
        </a> */}
      </main> 

      <footer className={styles.footer}>
        <p>2023 time to code</p>
      </footer> 
    </> 
  )
}
// it is server side rendering will be done first no
//matter you place it at bottom or at top
export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}