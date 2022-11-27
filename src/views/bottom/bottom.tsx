import LiveImg  from '../../assets/img/title1.jpg'
import ConcertImg  from '../../assets/img/title2.jpg'
import commentImg  from '../../assets/img/comment.jpg'
import styles from './bottom.module.scss'
const renderList = [
    {
        key:'godLive',
        name: '神级现场',
        imgSrc: LiveImg,
        comment: commentImg
    },
    {
        key:'concert',
        name: '传奇演唱会',
        imgSrc: ConcertImg,
        comment: commentImg
    },
]

export default function bottom() {
  return (
    <section className={styles.bottom} >{
            renderList.map((i)=>(
                <div key={i.key}>
                    <img src={i.imgSrc} />
                    <img src={i.comment} className={styles.comment} />
                </div>
            ))
        }
    </section>
  )
}
