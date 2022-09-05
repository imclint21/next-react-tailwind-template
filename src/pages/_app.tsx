import { useEffect } from "react";
import type { AppProps } from "next/app";
import Layout from "../components/_base/layout";
import TagManager from "react-gtm-module";
import "../styles/globals.scss"

function Application ({ Component, pageProps }: AppProps) {
	useEffect(() => {
		TagManager.initialize({
			gtmId: "GTM-XXXXXXX"
		});
	}, []);

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default Application;
