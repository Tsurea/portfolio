// Components for landing page
import Faq from "@components/landing/faq";
import Explain from "@components/landing/explain";
import Stuff from "@components/landing/stuff"
import Header from "@components/landing/header";
import Proof from "@components/landing/proof";

import fs from "fs";
import path from "path";

import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('@components/navbar'), { ssr: false });
import Footer from '@components/footer';

type PropsType = {
	locale: string;
}

export async function getStaticProps({ locale }: PropsType) {
  const filePath = path.join(process.cwd(), 'src/locales', `${locale}.json`);
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());

	return {
		props: {
			page: data["/"],
			search: data['/search'],
			navbar: data["navbar"],
			footer: data["footer"]
		},
	};
}

type HomeType = {
	page: any;
	search: any;
	navbar: any;
	footer: any;
}

function HomePage({ page, search, navbar, footer }: HomeType) {
	return (
		<>
			<NoSSR page={navbar}/>
			<main className="space-y-12 justify-center items-center flex flex-col font-outfit">
				<Header page={page} search={search} />
				<Proof page={page} />
				<Explain page={page} />
				<Stuff page={page} />
				<Faq page={page} />
			</main>
			<Footer page={footer}/>
		</>
	)
}

export default HomePage;
