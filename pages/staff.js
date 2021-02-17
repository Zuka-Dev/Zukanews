import Image from "next/image"
import Head from "next/head"
import styles from "../styles/staff.module.css"
import { Toolbar } from "../components/toolbar"
const Staffs = () =>{
    const img = "/background.jpg"
  const styling = {
    backgroundImage: `url("${img}")`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"
  }
   return(
       <div className="container" style={styling}>
           <Head>
               <title>Staff</title>
           </Head>
           <Toolbar/>
           <div>
               <h1 className="text-1 text-light text-outline text-center">
                   This is my team
               </h1>
            <div className="flex-container">
                <div className={styles.image}>
                    <img src="/profileImg.jpg" className="img-profile"/>
                </div>
                <p className="text-center text-light text-outline text-3">Azuka Daniel</p>
                <p className="text-center text-light text-outline text-3">Intermediate Front-End Web Developer</p>
                
                <p className="text-center text-light text-outline text-4">Just a young Front-End Web dev crazy about NextJS.<br/> This is actually my first project with NextJs</p>
            </div>
           </div>
       </div>
   );
};


export default Staffs;