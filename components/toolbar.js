import { useRouter } from 'next/router'
import styles from "../styles/toolbar.module.css"

export const Toolbar = () => {
    const router = useRouter()
    return (
        <div className={styles.main}>
            <div onClick ={()=> router.push('/')}>Home</div>
            <div onClick ={()=> router.push('/feeds/1')}>Feed</div>
            <div onClick ={()=> router.push('/staff')}>Staff</div>
            <div onClick ={()=> window.location.href = 'https://twitter.com/Zuka_Dev'}>Twitter</div>
        </div>
    )
}

