

import Apollo_GetAnimeList from "./services";
import {
	Grid,
	AnimeDetail,
	AnimeDetailBanner,
	AnimeCollectionWrapper,
	AnimeDetailBannerImage,
	AnimeDescription,
	AnimeCover,
	AnimeCoverImage,
	AnimeInfo,
	AnimeInfoTrack,
	AnimeInfoTrackList,
	AnimeImage,
	AnimeInfoSimilar,
	AnimeInfoSimilarContent,
	AnimeMedia,
	AnimeMediaImageWrapper,
	AnimeMediaDescWrapper,
	Button,
	Genres,
	GenresLabel,
	Typography
} from "../../components"
import { Link, useParams } from "react-router-dom";

const PageAnimeDetailLoader = () => {
	return "loading"
}

const PageAnimeDetailContent = ({ data }) => {
	const {
		bannerImage,
		coverImage,
		title,
		description,
		genres,
		episodes,
		popularity,
		seasonYear,
		duration,
		format,
		studios,
		characterPreview,
		staffPreview,
		tags
	} = data.Media;

	return (
		<>
			<AnimeDetailBanner>
				<AnimeDetailBannerImage src={bannerImage} />
			</AnimeDetailBanner>
			<AnimeDescription>
				<AnimeCover>
					<AnimeCoverImage src={coverImage.large} />
					<Button fullWidth>
						<svg width="14px" height="14px" fill="white" data-v-0228dea0="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path data-v-0228dea0="" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
						</svg>
						<span>Add To Collection</span>
					</Button>

					{/* ABOUT ANIME */}
					<br />
					<Typography size={16}>Track Record</Typography>
					<AnimeInfoTrackList>
						<ul>
							<li>Popularity : {popularity}</li>
							<li>Episoded : {episodes}</li>
							<li>Season Year : {seasonYear}</li>
							<li>Duration : {duration} Min</li>
							<li>Format : {format}</li>
							<li>Studios : {studios.edges.filter((data) => data.isMain).map((data, i) => (`${data.node.name} `))}</li>
						</ul>
					</AnimeInfoTrackList>

					{/* TAGS */}
					<br />
					<Typography size={16}>Tags</Typography>
					<AnimeInfoTrackList>
						<ul>
							{tags.map((data, i) => (
								<li key={i}>{data.name} - {data.rank}</li>
							))}
						</ul>
					</AnimeInfoTrackList>
				</AnimeCover>
				<AnimeDetail>
					<Typography variant={"h2"}>{title.english}</Typography>
					<Typography dangerouslySetInnerHTML={{ __html: description }} size={12} />
					<Genres>
						{genres.map((data, i) => (
							<GenresLabel key={i} size={12}>{data}</GenresLabel>
						))}
					</Genres>

					{/* CHARACTERS */}
					<AnimeInfoSimilar>
						<br />
						<Typography variant="h3">Characters</Typography>
						<AnimeInfoSimilarContent>
							{characterPreview.edges.map((data, i) => (
								<AnimeMedia>
									<AnimeMediaImageWrapper>
										<AnimeImage src={data.node.image.large} />
									</AnimeMediaImageWrapper>
									<AnimeMediaDescWrapper>
										<Typography size={12}>{data.node.name.userPreferred}</Typography>
									</AnimeMediaDescWrapper>
								</AnimeMedia>
							))}
						</AnimeInfoSimilarContent>
						<br />
						{/* STAFF */}
						<Typography variant="h3">Staff</Typography>
						<AnimeInfoSimilarContent>
							{staffPreview.edges.map((data, i) => (
								<AnimeMedia>
									<AnimeMediaImageWrapper>
										<AnimeImage src={data.node.image.large} />
									</AnimeMediaImageWrapper>
									<AnimeMediaDescWrapper>
										<Typography size={12}>{data.node.name.userPreferred}</Typography>
									</AnimeMediaDescWrapper>
								</AnimeMedia>
							))}
						</AnimeInfoSimilarContent>
					</AnimeInfoSimilar>
				</AnimeDetail>
			</AnimeDescription>
		</>
	)
}

const PageAnimeDetail = (props) => {
	let params = useParams();
	const { loading, data } = Apollo_GetAnimeList({
		"variables": {
			"id": params.id,
			"isAdult": false,
			"type": "ANIME"
		}
	});
	if (loading) { return <PageAnimeDetailLoader /> }
	if (data) { return <PageAnimeDetailContent data={data} /> }
}

export default PageAnimeDetail;