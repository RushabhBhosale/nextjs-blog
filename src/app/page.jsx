"use client"
import Image from 'next/image';
import styles from './home.module.css'
import { useEffect, useState } from 'react';
import { getPosts } from '@/libs/data';
import PostCard from '@/components/postCard/postCard';

const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsData = await getPosts();
      setPosts(postsData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Creative Thoughts Agency</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam doloribus quidem aliquid temporibus</p>
          <div className={styles.buttons}>
            <div className={styles.button}>Learn More</div>
            <div className={styles.button}>Contact</div>
          </div>
          <div className={styles.brands}>
            <Image src="/brands.png" alt='' fill className={styles.brandImg} />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/hero.gif" alt='' fill className={styles.heroImg} />
        </div>
      </div>
      <div className={styles.posts}>
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </>
  )
};

export default Home;