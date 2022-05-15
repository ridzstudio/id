import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

import { Grid, Button, TextField, FormControlLabel, Checkbox } from '@material-ui/core';

export default function SignUp() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const [config, setConfig] = useState({
    showPassword: false,
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

  const handleSubmit = (event) => {
    // event.preventDefault()
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
                            />
                          </Grid>
                          <Grid item md={6}>
                            <TextField
                              label="Last name"
                              fullWidth
                              value={data.lastName}
                              name="lastName"
                              onChange={handleData}
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
                              fullWidth
                            />
                          </Grid>
                          <Grid item md={6}>
                            <TextField
                              label="Confirm"
                              type={config.showPassword ? "text" : "password"}
                              fullWidth
                              value={config.confirmPassword}
                              name="confirmPassword"
                              onChange={handleConfig}
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
                                value="checked1"
                                color="primary"
                              />
                            }
                            label="Show password"
                          />
                          <div>
                            <Link
                              href="/sign-in"
                              className="text-first">
                              <a>Sign in instead</a>
                            </Link>
                          </div>
                        </div>
                        <div className="text-center">
                          <small className="text-black-50">By clicking the <strong>Create account</strong> button
                            below you agree to our terms of service and privacy
                            statement.</small>
                          <Button type="submit" className="btn-primary text-uppercase font-weight-bold font-size-sm my-3">
                            Create account
                          </Button>
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