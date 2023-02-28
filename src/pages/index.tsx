
import { useWindowContext } from '@/context/WindowContext';
import Head from 'next/head';
import React , { } from 'react';

export default function Home() {
const {height} = useWindowContext();
  return (
    <>
      <Head>
        <title>PhotosHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <h1 className="text-4xl font-bold">PhotosHub</h1>

      <h1 >{height}</h1>

    </>
  );
};
