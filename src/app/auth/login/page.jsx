'use client'
import { useRouter } from 'next/navigation';
import {signIn} from 'next-auth/react'
import Link  from 'next/link';
import './login.css'
import { useRef, useState } from 'react';
import { useFormik } from 'formik';
import { signIpSchema } from '@/app/schema/signinSchema';

export default function Login() {

  const ref = useRef();
  const router = useRouter();

  const initialValues = {
    email: '',
    password: '',
  }

  const submit = async (userInfo) => {
    if (!userInfo?.email || !userInfo?.password) {
      setError('Please fill out all fields');
    }

    try {
      const res = await signIn('credentials', {
        email: userInfo.email,
        password: userInfo.password,
        redirect: false,
        callbackUrl: process.env.NEXTAUTH_URL
      });

      if (!res.ok) {
        setError("Failed to register")
      }

      if (res.error) {
        setError("Invalid credentials provided.");
        return
      }

      router.replace("/")

    } catch (error) {
      setError("Server Error")      
    }
  }

  const {values, errors, handleBlur, handleChange, handleSubmit, touched} = useFormik({
    validationSchema: signIpSchema,
    initialValues: initialValues,
    onSubmit: submit,
  })

  // const [userInfo, setUserInfo] = useState({
  //   email: '',
  //   password: '',
  // });

  const [error, setError] = useState("");

  // const handleChange = (e) => {
  //   setUserInfo({
  //     ...userInfo,
  //     [e.target.name]: e.target.value
  //   })
  // }

  

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Email</label>
        <input type="email" name='email' value={values.email} onChange={handleChange} placeholder="Email" id="email" />
        {errors && touched.email? <p>{errors.email}</p>: ""}

        <label htmlFor="password">Password</label>
        <input type="password" name='password' value={values.password} onChange={handleChange} placeholder="Password" id="password" />
        {errors && touched.password? <p>{errors.password}</p>: ""}

        <button type='submit'>Log In</button>

        <p>Dont have an account <Link href='/auth/register'>Register</Link></p>
        <div style={{ color: "red" }}>{error}</div>
      </form>
    </>
  )
}
