import Head from "next/head";
import Image from "next/image";
import axios from 'axios'
import * as encryption from 'object-encrypt-decrypt'
import Link from "next/link";
import { useEffect, useState } from 'react';
import validEmail from '@secretsofsume/valid-email';


import { Grid, Button, TextField, FormControlLabel, Checkbox, CircularProgress } from '@material-ui/core';

export default function SignUp() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [config, setConfig] = useState({
    showPassword: false,
  })

  const [formConfig, setFormConfig] = useState({
    error: false,
    loading: false
  })

  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleConfig = (event) => {
    if (event.target.name === "showPassword") {
      setConfig({ ...config, showPassword: event.target.checked })
    } else {
      setConfig({ ...config, [event.target.name]: event.target.value });
    }
  }

  const handleValidation = (event) => {
    setError({ ...error, [event.target.name]: '' })
    if (event.target.name === "firstName" && !event.target.value) {
      setError({ ...error, [event.target.name]: 'First name is required' })
    } else if (event.target.name === "lastName" && !event.target.value) {
      setError({ ...error, [event.target.name]: 'Last name is required' })
    } else if (event.target.name === "email") {
      if (!event.target.value) {
        setError({ ...error, [event.target.name]: 'Email address is required' })
      } else if (!validEmail(event.target.value)) {
        setError({ ...error, [event.target.name]: 'Email address is invalid' })
      }
    } else if (event.target.name === "password") {
      if (!event.target.value) {
        setError({ ...error, [event.target.name]: 'Password is required' })
      } else if (event.target.value.length < 6) {
        setError({ ...error, [event.target.name]: 'Password minimum length should be 6 character' })
      }
    } else if (event.target.name === "confirmPassword") {
      if (!event.target.value) {
        setError({ ...error, [event.target.name]: 'Password confirmation is required' })
      } else if (event.target.value !== data.password) {
        setError({ ...error, [event.target.name]: 'Password is not matching' })
      }
    }
  }


  useEffect(() => {
    if (data.firstName && data.lastName && data.email && validEmail(data.email) && data.password && data.password.length >= 6 && data.confirmPassword && data.confirmPassword == data.password) {
      setFormConfig({ ...formConfig, error: false })
    } else {
      setFormConfig({ ...formConfig, error: true })
    }
  }, [data, config])


  const handleSubmit = (event) => {
    event.preventDefault()
    setFormConfig({ ...formConfig, loading: true })
    axios.post('/account/create', {
      data: encryption.encrypt(data)
    })
      .then(function (response) {
        console.log(response);
        setFormConfig({ ...formConfig, loading: false })
      })
      .catch(function (err) {
        if (err.response.status === 417) {
          setError({ ...error, ...encryption.decrypt(err.response.headers.message) })
        } else {
          console.error(err)
        }
        setFormConfig({ ...formConfig, loading: false })
      })
  }

  return (
    <>
      <Head>
        <title>Sign up page template</title>
      </Head>
      <main>
        <div className="app-wrapper bg-white min-vh-100">
          <div className="app-main min-vh-100">
            <div className="app-content p-0">
              <div className="app-content--inner d-flex align-items-center">
                <div className="flex-grow-1 w-100 d-flex align-items-center">
                  <div className="bg-composed-wrapper--content py-5">
                    <Grid item md={10} lg={8} xl={4} className="mx-auto">
                      <div className="text-center mb-4">
                        <div className='mb-4'>
                          <Image
                            src='/logo.svg'
                            alt='Ridz Studio'
                            width={120}
                            height={70}
                          />
                        </div>
                        <h1 className="display-4 mb-1 font-weight-bold">
                          Create your Ridz Studio ID
                        </h1>
                        <p className="font-size-lg mb-0 text-black-50">
                          One account. All of Ridz Studio working for you.
                        </p>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <Grid container spacing={6} className="mb-0">
                          <Grid item md={6}>
                            <TextField
                              label="First name"
                              fullWidth
                              value={data.firstName}
                              name="firstName"
                              onChange={handleData}
                              onBlur={handleValidation}
                              error={Boolean(error.firstName)}
                              helperText={error.firstName}
                            />
                          </Grid>
                          <Grid item md={6}>
                            <TextField
                              label="Last name"
                              fullWidth
                              value={data.lastName}
                              name="lastName"
                              onChange={handleData}
                              onBlur={handleValidation}
                              error={Boolean(error.lastName)}
                              helperText={error.lastName}
                            />
                          </Grid>
                        </Grid>
                        <div className="mb-3">
                          <TextField
                            label="Email address"
                            fullWidth
                            type="email"
                            value={data.email}
                            name="email"
                            onChange={handleData}
                            onBlur={handleValidation}
                            error={Boolean(error.email)}
                            helperText={error.email}
                          />
                        </div>
                        <Grid container spacing={6} className="mb-2">
                          <Grid item md={6}>
                            <TextField
                              label="Password"
                              type={config.showPassword ? "text" : "password"}
                              value={data.password}
                              name="password"
                              onChange={handleData}
                              onBlur={handleValidation}
                              fullWidth
                              error={Boolean(error.password)}
                              helperText={error.password}
                            />
                          </Grid>
                          <Grid item md={6}>
                            <TextField
                              label="Confirm"
                              type={config.showPassword ? "text" : "password"}
                              fullWidth
                              value={data.confirmPassword}
                              name="confirmPassword"
                              onChange={handleData}
                              error={Boolean(error.confirmPassword)}
                              onBlur={handleValidation}
                              helperText={error.confirmPassword}
                            />
                          </Grid>
                        </Grid>
                        <div className="d-flex justify-content-between align-items-center font-size-md mb-5">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={config.showPassword}
                                name="showPassword"
                                onChange={handleConfig}
                                color="primary"
                              />
                            }
                            label="Show password"
                          />
                        </div>
                        <div className="text-center">
                          <small className="text-black-50">By clicking the <strong>Create account</strong> button below you agree to our terms of service and privacy statement.</small>
                          <div style={{ position: 'relative' }}>
                            <Button type="submit" disabled={formConfig.error ? formConfig.error : formConfig.loading} className="btn-primary text-uppercase font-weight-bold font-size-sm my-3">
                              {formConfig.loading ? "Creating account ..." : "Create account"}
                            </Button>
                            {formConfig.loading && <CircularProgress size={20} style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              marginTop: -12,
                              marginLeft: -12
                            }} />}
                          </div>
                        </div>
                      </form>
                      <div className="text-center text-black-50 mt-3">
                        Don't have an account?{' '}
                        <Link
                          href="/sign-in"
                          onClick={(e) => e.preventDefault()}
                          className="text-first">
                          <a>Sign in</a>
                        </Link>
                        {' '}instead
                      </div>
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