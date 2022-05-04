import Apollo_GetAnimeList from "./services";
import {
	Grid,
	AnimeBox,
	AnimeImage,
	AnimeBoxImage,
	AnimeBoxDetail,
	AnimeCollectionWrapper,
	Typography,
	TitleSection
} from "../../components"
import { Link } from "react-router-dom";

const PageAnimeHomeLoader = () => {
	return "loading"
}

const PageAnimeHomeContent = ({ data }) => {
	const {
		trending,
		season,
		popular
	} = data;

	return (
		<>
			<Typography variant="h1">ANIME</Typography>
			<AnimeCollectionWrapper>
				<TitleSection>
					<Typography size={24}>Trending</Typography>
					<Link to={`/list/trending`}>
						Lihat Semua
					</Link>
				</TitleSection>
				<Grid md={6} xs={2}>
					{trending.media.map((media) => (
						<AnimeBox key={media.id}>
							<AnimeBoxImage>
								<AnimeImage src={media.bannerImage} />
							</AnimeBoxImage>
							<AnimeBoxDetail>
								<Link to={`/detail/${media.id}`}>
									{media.title.userPreferred}
								</Link>
								<Typography size={12}>
									Ep : {media.episodes ? media.episodes : 'Ongoing'}
								</Typography>
							</AnimeBoxDetail>
						</AnimeBox>
					))}
				</Grid>
			</AnimeCollectionWrapper>
			<AnimeCollectionWrapper>
				<TitleSection>
					<Typography size={24}>Popular</Typography>
					<Link to={`/list/popular`}>
						Lihat Semua
					</Link>
				</TitleSection>
				<Grid md={6} xs={2}>
					{popular.media.map((media) => (
						<AnimeBox key={media.id}>
							<AnimeBoxImage>
								<AnimeImage src={media.bannerImage} />
							</AnimeBoxImage>
							<AnimeBoxDetail>
								<Link to={`/detail/${media.id}`}>
									{media.title.userPreferred}
								</Link>
								<Typography size={12}>
									Ep : {media.episodes ? media.episodes : 'Ongoing'}
								</Typography>
							</AnimeBoxDetail>
						</AnimeBox>
					))}
				</Grid>
			</AnimeCollectionWrapper>
			<AnimeCollectionWrapper>
				<TitleSection>
					<Typography size={24}>Season</Typography>
					<Link to={`/list/next-session`}>
						Lihat Semua
					</Link>
				</TitleSection>
				<Grid md={6} xs={2}>
					{season.media.map((media) => (
						<AnimeBox key={media.id}>
							<AnimeBoxImage>
								<AnimeImage src={media.bannerImage} />
							</AnimeBoxImage>
							<AnimeBoxDetail>
								<Link to={`/detail/${media.id}`}>
									{media.title.userPreferred}
								</Link>
								<Typography size={12}>
									Ep : {media.episodes ? media.episodes : 'Ongoing'}
								</Typography>
							</AnimeBoxDetail>
						</AnimeBox>
					))}
				</Grid>
			</AnimeCollectionWrapper>
		</>
	)
}

const PageAnimeHome = () => {
	const { loading, data } = Apollo_GetAnimeList({
		"variables": {
			"nextSeason": "SUMMER",
			"nextYear": 2022,
			"season": "SPRING",
			"seasonYear": 2022,
			"type": "ANIME"
		}
	});
	if (loading) { return <PageAnimeHomeLoader /> }
	if (data) { return <PageAnimeHomeContent data={data} /> }
}

export default PageAnimeHome;