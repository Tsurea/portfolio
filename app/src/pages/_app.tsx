import '@styles/index.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import "mapbox-gl/dist/mapbox-gl.css";

function MyApp({ Component, pageProps } : AppProps) {
	return (
		<>
			<Head>
				<title>ProfileFinder</title>
				<link rel="icon" type="image/x-icon" href="/icone.ico" />
			</Head>
			<div>
				<Component {...pageProps} />
			</div>
		</>
	)
}

export default MyApp;
