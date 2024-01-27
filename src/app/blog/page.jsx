"use client"

import React, { useEffect, useState } from 'react';
import styles from './blog.module.css';
import PostCard from '@/components/postCard/postCard';
import { getPosts } from '@/libs/data';

const BlogPage = () => {
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
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPage;
