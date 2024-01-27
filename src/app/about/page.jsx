import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'

const AboutPage = () => {

  console.log("ljhaf")

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver, and better.</h1>
        <p>We create digital ideas that are bigger, bolder, braver, and better. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, non? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h2>10k+</h2>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h2>23k+</h2>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h2>6k+</h2>
            <p>Services & Plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/about.png' alt='' fill />
      </div>
    </div>
  )
}

export default AboutPage