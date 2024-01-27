import React from 'react'
import styles from './postcard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({post}) => {
   return (
      <div className={styles.container}>
         <div className={styles.top}>
            <div className={styles.imgContainer}>
               <Image src={post.img} alt='' fill className={styles.img} />
            </div>
            <span className={styles.date}>01.02.2024</span>
         </div>
         <div className={styles.bottom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{(post.body).slice(0,100)}</p>
            <Link className={styles.link} href={`blog/${post.id}`}>READ MORE</Link>
         </div>
      </div>
   )
}

export default PostCard