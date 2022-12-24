import '../styles/global.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic'

const RainbowKitWrapper = dynamic(() => import('./RainbowKitProvider'), {
  ssr: false
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RainbowKitWrapper>
      <Component {...pageProps} />
    </RainbowKitWrapper>
  );
}

export default MyApp;
