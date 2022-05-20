import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

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
    remember: ''
  })

  const [formConfig, setFormConfig] = useState({
    error: false,
    loading: false,
    emailAvailable: false
  })

  const [checked1, setChecked1] = useState(true);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };

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
                      <div>
                        <div className="mb-4">
                          <TextField
                            fullWidth
                            variant="outlined"
                            id="textfield-email"
                            label="Email address"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <MailOutlineTwoToneIcon />
                                </InputAdornment>
                              )
                            }}
                          />
                        </div>
                        <div className="mb-3">
                          <TextField
                            fullWidth
                            variant="outlined"
                            id="textfield-password"
                            label="Password"
                            type="password"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <LockTwoToneIcon />
                                </InputAdornment>
                              )
                            }}
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center font-size-md">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={checked1}
                                onChange={handleChange1}
                                value="checked1"
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
                          <Button className="btn-second font-weight-bold w-50 my-2">
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