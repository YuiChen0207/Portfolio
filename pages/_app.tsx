import { useRouter } from 'next/router';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const basename = router.basePath;

  return <Component {...pageProps} basename={basename}/>
}