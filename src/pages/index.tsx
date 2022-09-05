import type { NextPage } from "next"
import Test from "../components/slices/test";
import Container from "../components/_base/container";

const Home: NextPage = () => {
	return (
		<section>
			<Container>
				<Test />
			</Container>
		</section>
	)
}

export default Home;
