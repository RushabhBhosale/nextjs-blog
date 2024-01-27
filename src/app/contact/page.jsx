 import styles from './contact.module.css'
import Image from 'next/image'

const ContactPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" fill alt='' />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder='Name and Surname' />
          <input type="email" placeholder='Email Address' />
          <input type="tel" placeholder='Phone Number (Optional)' />
          <textarea name="" id="" cols="30" placeholder='Message' rows="10"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage