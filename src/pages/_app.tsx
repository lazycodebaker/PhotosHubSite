import WindowContextProvider from '@/context/WindowContext';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WindowContextProvider>
      <Component {...pageProps} />
    </WindowContextProvider>
  );
}
