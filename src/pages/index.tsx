// Components for landing page
import Navbar from "@components/navbar";
import Me from "@components/me";
import Porfolio from "@components/portfolio";
import Skills from "@components/skills";

import fs from "fs";
import path from "path";

type PropsType = {
	locale: string;
}

export async function getStaticProps({ locale }: PropsType) {
  const filePath = path.join(process.cwd(), 'src/locales', `${locale}.json`);
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());

	return {
		props: {
			page: data
		}
	};
}

function HomePage({ page }: any) {
	return (
		<div className="bg-[#2c4770] size-screen p-4">
			<Navbar page={page["navbar"]}/>
			<Skills page={page["skills"]}/>
		</div>
	)
}

export default HomePage;
