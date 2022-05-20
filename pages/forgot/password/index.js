import Head from "next/head";

import { Grid, InputAdornment, Button, TextField } from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import Image from "next/image";

export default function Password() {
  return (
    <>
      <Head>
        <title>Forgot password page template</title>
      </Head>
      <main>
        <div className="app-wrapper bg-white min-vh-100">
          <div className="app-main min-vh-100">
            <div className="app-content p-0">
              <div className="app-content--inner d-flex align-items-center">
                <div className="flex-grow-1 w-100 d-flex align-items-center">
                  <div className="bg-composed-wrapper--content py-5">
                    <Grid item md={10} lg={8} xl={4} className="mx-auto">
                      <div className="text-center mb-5">
                      <div className='mb-4'>
                          <Image
                            src='/logo.svg'
                            alt='Ridz Studio'
                            width={120}
                            height={70}
                          />
                        </div>
                        <h1 className="display-4 mb-1 font-weight-bold">
                          Recover Password
                        </h1>
                        <p className="font-size-lg mb-0 text-black-50">
                         Enter your email account to get a verification code 
                        </p>
                      </div>
                      <div>
                        <label className="font-weight-bold mb-2">
                          Email address
                        </label>
                        <TextField
                          fullWidth
                          variant="outlined"
                          id="textfield-email"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MailOutlineTwoToneIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                      </div>
                      <div className="text-center mb-5">
                        <Button
                          fullWidth
                          className="text-uppercase font-weight-bold font-size-sm mt-4 btn-primary">
                          Send password
                        </Button>
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