import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Grid, Button, TextField } from '@material-ui/core';

export default function SignUp() {
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
                      <div className="mb-3">
                        <label className="font-weight-bold mb-2">
                          Email address
                        </label>
                        <TextField
                          variant="outlined"
                          size="small"
                          fullWidth
                          placeholder="Enter your email address"
                          type="email"
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex justify-content-between">
                          <label className="font-weight-bold mb-2">
                            Password
                          </label>
                        </div>
                        <TextField
                          variant="outlined"
                          size="small"
                          fullWidth
                          placeholder="Enter your password"
                          type="password"
                        />
                      </div>
                      <Grid container spacing={6}>
                        <Grid item md={6}>
                          <div>
                            <label className="font-weight-bold mb-2">
                              First name
                            </label>
                            <TextField
                              variant="outlined"
                              size="small"
                              fullWidth
                              placeholder="Enter your first name"
                            />
                          </div>
                        </Grid>
                        <Grid item md={6}>
                          <div>
                            <label className="font-weight-bold mb-2">
                              Last name
                            </label>
                            <TextField
                              variant="outlined"
                              size="small"
                              fullWidth
                              placeholder="Enter your last name"
                            />
                          </div>
                        </Grid>
                      </Grid>
                      <div className="my-4">
                        By clicking the <strong>Create account</strong> button
                        below you agree to our terms of service and privacy
                        statement.
                      </div>
                      <div className="text-center mb-4">
                        <Button className="btn-primary text-uppercase font-weight-bold font-size-sm my-3">
                          Create account
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