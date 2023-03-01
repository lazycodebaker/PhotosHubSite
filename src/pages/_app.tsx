import AuthContextProvider from '@/context/AuthContext';
import WindowContextProvider from '@/context/WindowContext';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider >
      <WindowContextProvider>
        <Component {...pageProps} />
      </WindowContextProvider>
    </AuthContextProvider>
  );
}
