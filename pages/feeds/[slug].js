import { useRouter } from 'next/router'
import { Toolbar } from "../../components/toolbar"
import styles from "../../styles/feeds.module.css"
export const Feed = ({ pageNum, articles }) => {
    const router = useRouter()
    const img = "/background.jpg"
    const styling = {
      backgroundImage: `url("${img}")`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat"
    }
    console.log(articles, pageNum)
    return(
             <div className={styles.main} style={styling}>
           <Toolbar />
            {articles.map((article, index)=> (
                <div key= {index} onClick={() =>(window.location.href = article.url)} className={styles.article}>
                    <h1 onClick={() =>(window.location.href = article.url)} className="text-outline ">{article.title}</h1>
                    {!!article.urlToImage && <img src={article.urlToImage}/>}
                    <p className="text-plain  text-outline">{article.description}</p>
                </div>
            ))}
            <div className={styles.paginator}>
                <div onClick={()=>{
                    if (pageNum > 1) {
                        router.push(`/feeds/${pageNum - 1}`).then(() =>window.scrollTo(0, 0))
                    }
                }} className={`text-light ${pageNum == 1 ? styles.disabled : styles.active}`}>Previous page</div>
                <div className="text-light">#{pageNum}</div>
                <div onClick={()=>{
                    if (pageNum < 5) {
                        router.push(`/feeds/${pageNum + 1}`).then(() =>window.scrollTo(0, 0))
                    }
                }} className={`text-light ${pageNum === 5 ? styles.disabled : styles.active}`}>Next page</div>

            </div>
        </div>
                
        
       
    )
}

export const getServerSideProps = async pageContext => {
    const pageNum = pageContext.query.slug
    if(!pageNum || pageNum < 1 || pageNum > 5){
        return{
            props:{
                articles:[],
                pageNum: 1,
            }
        }
    }
    const apiResponse = await fetch(`http://newsapi.org/v2/top-headlines?country=ng&pageSize=5&page=${pageNum}`,{
        headers:{
            Authorization:`Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`
        }
    })

    const apiJson = await apiResponse.json();
    const { articles } = apiJson

    return{
        props:{
            articles,
            pageNum: Number.parseInt(pageNum)
        }
    }
}

export default Feed;