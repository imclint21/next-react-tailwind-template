import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

const ErrorPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>My Application | Error 404 - Page Not Found</title>
				<meta name="title" content={"My Application | Error 404 - Page Not Found"}/>
			</Head>
			<section className="h-[60vh] flex justify-center items-center">
				<div className="text-center">
					<p className="text-sm font-semibold uppercase tracking-wide">Error 404</p>
					<h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page Not Found.</h1>
					<p className="mt-2 text-base">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
					<div className="mt-6">
						<Link href={"/"}>
							<a className="text-base font-medium hover:text-gray-800">
								Go back home
								<span aria-hidden="true"> &rarr;</span>
							</a>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export default ErrorPage;
