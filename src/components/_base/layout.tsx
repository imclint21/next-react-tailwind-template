import Head from "next/head";
import Header from "./header";
import { LayoutProps } from "../../types/layout";

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Head>
				<title>My Application</title>
				<meta name="title" content="My Application"/>
				{/*<meta name="description" content={"Description"}/>*/}
				{/*<meta name="theme-color" content={"#0b2384"} />*/}
			</Head>
			<div>
				<Header />
				<main role={"main"}>
					{children}
				</main>
				{/*<Footer />*/}
			</div>
		</>
	)
}

export default Layout;