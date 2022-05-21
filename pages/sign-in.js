import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios'
import { useState, useEffect } from 'react';
import validEmail from '@secretsofsume/valid-email';
import * as encryption from 'object-encrypt-decrypt'

import {
  Grid,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
  TextField
} from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

export default function SignIn() {
  const [data, setData] = useState({
    email: '',
    password: '',
    remember: false
  })

  const [config, setConfig] = useState({
    showPassword: false,
  })

  const [formConfig, setFormConfig] = useState({
    error: true,
    loading: false,
    emailAvailable: false
  })

  const [error, setError] = useState({
    email: '',
    password: ''
  })

  const handleData = (event) => {
    if (event.target.name === "remember") {
      setData({ ...data, remember: event.target.checked })
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  }

  const handleConfig = (event) => {
    setConfig({ ...config, showPassword: event.target.checked })
  }

  const handleValidation = (event) => {
    setError({ ...error, [event.target.name]: '' })
    if (event.target.name === "email") {
      if (!event.target.value) {
        setError({ ...error, [event.target.name]: 'Please enter your email' })
      }
    }
  }

  useEffect(() => {
    if (!formConfig.emailAvailable && data.email) {
      setFormConfig({ ...formConfig, error: false })
    } else if (formConfig.emailAvailable && data.password && data.password.length < 6) {
      setFormConfig({ ...formConfig, error: false })
    } else {
      setFormConfig({ ...formConfig, error: true })
    }
  }, [data, config])

  const changeEmail = (event) => {
    event.preventDefault()
    setData({
      email: '',
      password: ''
    })
    setFormConfig({
      error: true,
      loading: false,
      emailAvailable: false
    })
    setError({
      email: '',
      password: ''
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormConfig({ ...formConfig, loading: true })
    if (!formConfig.emailAvailable) {
      let email = data.email
      if (!validEmail(data.email)) {
        email = data.email + '@ridzstudio.com'
        setData({ ...data, email: data.email + '@ridzstudio.com' })
      }
      console.log(email)
      axios.head('/account/find', {
        headers: {
          data: encryption.encrypt(email)
        }
      })
        .then(function (response) {
          if (response.status === 202) {
            setFormConfig({ ...formConfig, emailAvailable: true, loading: false })
          }
        })
        .catch(function (err) {
          if (err.response.status === 404) {
            setError({ ...error, email: 'No account found with this email' })
          } else {
            console.error(err)
          }
          setFormConfig({ ...formConfig, loading: false })
        })
    }
  }

  return (
    <>
      <Head>
        <title>Sign in page template</title>
      </Head>
      <main>
        <div className="app-wrapper bg-white min-vh-100">
          <div className="app-main min-vh-100">
            <div className="app-content p-0">
              <div className="app-content--inner d-flex align-items-center">
                <div className="flex-grow-1 w-100 d-flex align-items-center">
                  <div className="bg-composed-wrapper--content py-5">
                    <Grid item md={10} lg={8} xl={4} className="mx-auto">
                      <div className="text-center pb-4 mb-4">
                        <div className='mb-4'>
                          <Image
                            src='/logo.svg'
                            alt='Ridz Studio'
                            width={120}
                            height={70}
                          />
                        </div>
                        <h1 className="display-4 mb-1 font-weight-bold">Sign in</h1>
                        <p className="font-size-lg mb-0 text-black-50">
                          Use your Ridz Studio ID
                        </p>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <TextField
                            label="Email address"
                            fullWidth
                            variant="outlined"
                            value={data.email}
                            name="email"
                            onChange={handleData}
                            onBlur={handleValidation}
                            error={Boolean(error.email)}
                            helperText={error.email}
                            disabled={formConfig.emailAvailable ? true : false}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <MailOutlineTwoToneIcon />
                                </InputAdornment>
                              ),
                              endAdornment: formConfig.emailAvailable ?
                                <InputAdornment position='end'>
                                  <Link href=""><a onClick={changeEmail}>Change</a></Link>
                                </InputAdornment>
                                : null
                            }}
                          />
                        </div>
                        {
                          formConfig.emailAvailable ?
                            <div className="mb-3">
                              <TextField
                                label="Password"
                                type={config.showPassword ? "text" : "password"}
                                value={data.password}
                                name="password"
                                onChange={handleData}
                                onBlur={handleValidation}
                                fullWidth
                                variant="outlined"
                                error={Boolean(error.password)}
                                helperText={error.password}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <LockTwoToneIcon />
                                    </InputAdornment>
                                  )
                                }}
                              />
                            </div>
                            : null
                        }
                        <div className="d-flex justify-content-between align-items-center font-size-md">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={data.remember}
                                onChange={handleData}
                                name="remember"
                                color="primary"
                              />
                            }
                            label="Remember me"
                          />
                          <div>
                            <Link
                              href="/forgot/password"
                              className="text-first">
                              <a>Recover password</a>
                            </Link>
                          </div>
                        </div>
                        <div className="text-center py-4">
                          <Button type="submit" disabled={formConfig.error ? formConfig.error : formConfig.loading} className="btn-second font-weight-bold w-50 my-2">
                            Sign in
                          </Button>
                        </div>
                        <div className="text-center text-black-50 mt-3">
                          Don't have an account?{' '}
                          <Link
                            href="/sign-up"
                            className="text-first">
                            <a>Sign up</a>
                          </Link>
                        </div>
                      </form>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}