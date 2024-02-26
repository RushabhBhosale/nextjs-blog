'use client'

import './register.css'
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import { signUpSchema } from '@/app/schema/signupSchema';

export default function Register() {

  const ref = useRef();

  const router = useRouter();;

  const [error, setError] = useState("");

  const initialValues = {
    name: '',
    email: '',
    password: '',
  }

  const submit = async (userInfo) => {
    console.log(userInfo);
    if (!userInfo?.name || !userInfo?.email || !userInfo?.password) {
      setError('Please fill out all fields');
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo),
      });

      if (res.ok) {
        ref?.current.reset();
        router.push('/auth/login');
        console.log("Registration Successful");
      } else {
        let errorMsg = await res.json()
        setError(errorMsg.message);
        console.log("Registration Failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    validationSchema: signUpSchema,
    initialValues: initialValues,
    onSubmit: submit,
  })

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form ref={ref} onSubmit={handleSubmit}>
        <h3>Register Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Username" name='name' onBlur={handleBlur} value={values.name} onChange={handleChange} id="name" />
        <p>{errors && touched.name ? <p>{errors.name}</p> : ""}</p>

        <label htmlFor="username">Email</label>
        <input type="email" placeholder="Email" name='email' onBlur={handleBlur} value={values.email} onChange={handleChange} id="email" />
        <p>{errors && touched.email ? <p>{errors.email}</p> : ""}</p>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" onBlur={handleBlur} name='password' value={values.password} onChange={handleChange} id="password" />
        <p>{errors && touched.password ? <p>{errors.password}</p> : ""}</p>

        <button type='submit'>Register</button>
        <p>Have an account <Link href='/auth/login'>Login</Link></p>
        <div style={{ color: "red" }}>{error}</div>
      </form>
    </>
  )
}
