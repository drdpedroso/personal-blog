import React from 'react'
import Head from 'next/head'

import profileImage from '../assets/profile.png'

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Homepage</title>
    </Head>

    <main>
      <img alt="João Melo profile" src={profileImage} />
      <h1>Hello world!</h1>
    </main>
  </div>
)

export default Home
