import React, { Suspense } from 'react';
import styles from './single.post.module.css';
import Image from 'next/image';
import PostUser from '@/components/postUser/PostUser';
import { getPost } from '@/libs/data';

const SinglePostPage = async ({ params }) => {

  const { slug } = params;

  const post = await getPost(slug)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt='' fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image src='https://img.freepik.com/free-photo/medium-shot-woman-wearing-headphones_23-2149818230.jpg?w=996&t=st=1706184582~exp=1706185182~hmac=98e1f6a3b254a17d2713da3aaa1ab2f0d4f2f59f0ce82b0e7635e40dad8af4ea' alt='' width={50} height={50} className={styles.avatar} />
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.id} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>23/ 12 /2003</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )

}

export default SinglePostPage