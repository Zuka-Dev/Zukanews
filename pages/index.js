import Head from 'next/head'
import { Toolbar } from '../components/toolbar'
import styles from '../styles/Home.module.css'


export default function Home() {
  const img = "/bground.jpeg"
  const styling = {
    backgroundImage: `url("${img}")`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"
  }
    return(
      <div className="container" style={styling} >
        <Head>
          <title>Home</title>
        </Head>
        <Toolbar/>
        <div className={styles.main}>
          <h1 className="text-2  text-center">Z-lite News App</h1>
          <p className="text-center text-4">We bring the latest feeds and news articles partaining to you</p>
        </div>
      </div>
    )
}
