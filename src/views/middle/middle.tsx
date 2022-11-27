
import cartoonImg from '../../assets/img/cartoon.jpg'
import foodImg from '../../assets/img/food.jpg'
import movieImg from '../../assets/img/movie.png'
import lifeImg from '../../assets/img/life.jpg'
import { useState ,FC} from 'react'
import styles from './middle.module.scss'

const TabsList = [
    {
        key:'cartoon',
        name:'动画',
        img:cartoonImg
    },
    {
        key:'food',
        name:'美食',
        img:foodImg
    },
    {
        key:'movie',
        name:'电影',
        img:movieImg
    },
    {
        key:'life',
        name:'生活',
        img:lifeImg
    },
]


const Middle:FC = ()=> {
   const [activeTab,setActiveTab]  = useState<string>('cartoon')
   console.log(activeTab)
 return (
   <section style={{'marginTop':'8px'}} >
       {/* tabs */}
       <div className={styles['tabs-content']}>
           <ul>
               {
                   TabsList.map(i=>(
                       <li key={i.key} onClick={()=>{setActiveTab(i.key)}}>
                        <span>{i.name}</span>
                        <span className={`${styles.line} ${activeTab==i.key ? styles.lineVisible:''}`}></span>
                        </li>
                   ))
               }
           </ul>
       </div>
       {/* comment */}
       {
            TabsList.map(i=>(
                <section className={styles.content} key={i.key}>
                    <h2>{i.name}</h2>
                    <img src={i.img}></img>
                </section>
            ))
       }
       
   </section>
 )
}
export default Middle
