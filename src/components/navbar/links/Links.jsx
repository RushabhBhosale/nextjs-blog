'use client'
import React, { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/navLink'
import Image from 'next/image'

const Links = () => {


   const links = [
      {
         title: "Home",
         path: "/",
      },
      {
         title: "About",
         path: "/about",
      },
      {
         title: "Contact",
         path: "/contact",
      },
      {
         title: "Blog",
         path: "/blog",
      },
   ]
   const [open, setOpen] = useState(false);

   return (
      <div className={styles.container}>
         <div className={styles.links}>
            {links.map((link => (
               <NavLink item={link} key={link.title} />
            )))}
         </div>
         <Image src='/menu.png' alt='' className={styles.menuButton} onClick={() => setOpen((prev) => !prev)} width={30} height={30} />
         {open && (
            <div className={styles.mobileLinks}>
               {links.map((link) => (
                  <NavLink item={link} key={link.title} />
               ))}
            </div>
         )}
      </div>
   )
}

export default Links