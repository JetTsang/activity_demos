
import cartoonImg from '../../assets/img/cartoon.jpg'
import foodImg from '../../assets/img/food.jpg'
import movieImg from '../../assets/img/movie.png'
import lifeImg from '../../assets/img/life.jpg'
import logoImg from '../../assets/img/logo.png'
import { useState, FC, useRef, useEffect } from 'react'
import styles from './middle.module.scss'
import { throttle } from '../../utils/util'
const TabsList = [
    {
        key: 'cartoon',
        name: '动画',
        img: cartoonImg
    },
    {
        key: 'food',
        name: '美食',
        img: foodImg
    },
    {
        key: 'movie',
        name: '电影',
        img: movieImg
    },
    {
        key: 'life',
        name: '生活',
        img: lifeImg
    },
]




const Middle: FC = () => {
    const [activeTab, setActiveTab] = useState<string>('cartoon')
    const [isFixed,setisFixed]  = useState<boolean>(false)


    const middleRef = useRef<HTMLElement>(null)

    const handleClickTabs = (key:string)=>{
        setActiveTab(key)
        contentIntoView(key)
    }
    // 点击tab ，实现content跳转到视口
    const contentIntoView = (key:string)=>{
        if(middleRef.current){
            const  content = middleRef.current.querySelector(`[data-id=${key}]`)
            content?.scrollIntoView({behavior:'smooth'})
        }
    }

    // 向下滚动的时候 ，实现吸顶
    const onWindowScroll = ()=>{
        console.log('12312312313');
        
        if(middleRef.current){
            const {top} = middleRef.current.getBoundingClientRect() 
            setisFixed(top<=0)
            //  滚动到某个位置，实现 tabs亮
            const contentList:Element[] = []
            TabsList.forEach(i=>{
                const  content:Element | null = (middleRef as any).current.querySelector(`[data-id=${i.key}]`)
                if(content){
                    contentList.push(content)
                }
            })
            Array.prototype.forEach.call(contentList,(i)=>{
                if(i){
                    const {top} = i.getBoundingClientRect()
                    if(top>0 && top <= 56){
                        const id = i.getAttribute('data-id')
                        setActiveTab(id)
                    }
                }
            })
        }
    }



    // 组件创建之后去监听
    useEffect(()=>{
        window.addEventListener('scroll',throttle(onWindowScroll,50))
        return ()=>{
            window.removeEventListener('scroll',onWindowScroll)
        }
    },[])




    return (
        <section style={{ 'marginTop': '8px'}} ref={middleRef} className={styles.middle}>
            {/* tabs */}
            <div className={`${styles['tabs-content']} ${isFixed ? styles.fixed : ''}`}>
                <ul>
                    {
                        TabsList.map(i => (
                            <li key={i.key} onClick={() => { handleClickTabs(i.key) }}>
                                <span>{i.name}</span>
                                <span className={`${styles.line} ${activeTab == i.key ? styles.lineVisible : ''}`}></span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* content */}
            {
                TabsList.map(i => (
                    <section className={styles.content} key={i.key} data-id={i.key}>
                        <h2>{i.name}</h2>
                        <img src={i.img}></img>
                    </section>
                ))
            }
            {/* 底下吸底的按钮 */}
            <div className={`${styles.bottomBtn} ${isFixed ? styles.visible : ''}`} >
                <img src={logoImg}></img>
                <a href="https://www.bilibili.com/" target="_blank">
                    <button>App 内打开</button>
                </a>
            </div>
        </section>
    )
}
export default Middle
