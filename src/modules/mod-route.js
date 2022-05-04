import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import PageAnimeHome from "../pages/anime-home";
import PageAnimeList from "../pages/anime-list";
import PageAnimeDetail from "../pages/anime-detail";
import PageAnimeCollection from "../pages/anime-collection";
import { Container } from '../components';

const ModuleRoute = () => {
	return (
		<Container>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<PageAnimeHome />} />
					<Route path="/collection" element={<PageAnimeHome />} />
					<Route path="/detail/:id" element={<PageAnimeDetail />} />
					<Route path="/list/:genre" element={<PageAnimeList />} />
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

export default ModuleRoute;
