'use client'
import React from 'react'
import styles from './navbar.module.css'
import Links from './links/Links'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Navbar = () => {

  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>{session?.data?.name.toUpperCase()}</Link>
      <div className={styles.flex}>
        <Links />
        <Link href='/auth/login'>Login</Link>
        <Link href='/auth/register'>Register</Link>
      </div>
    </div>
    
  )
}

export default Navbar