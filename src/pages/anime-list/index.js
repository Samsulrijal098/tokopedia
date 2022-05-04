import { useState, useEffect, useRef } from "react";
import { Apollo_GetAnimeListPopular, Apollo_GetAnimeListTrending } from "./services";
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
import { Link, useParams } from "react-router-dom";
import { GET_ANIME_LIST_TRENDING } from "./services/schema";
import { usePrevious } from "../../helper/usePrevious"
import { useOnScroll } from "../../helper/useOnScroll"

const PageAnimeListLoader = () => {
	return "loading"
}

const PageAnimeListContent = ({ data, title }) => {
	return (
		<>
			<Typography variant="h1">{title.toUpperCase()}</Typography>
			<Typography>
				Scroll Down to go to next page
			</Typography>
			<AnimeCollectionWrapper>
				<Grid md={6} xs={2}>
					{data.media.map((media, i) => (
						<AnimeBox key={i}>
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

const PageAnimeList = () => {
	let params = useParams();
	let fetchAnime = null;
	const pagination = useRef(1);
	const [doFetchMore, setDoFetchMore] = useState(false);
	const handleScroll = useOnScroll(() => {
		pagination.current = pagination.current + 1;
		setDoFetchMore(true)
	});
	switch (params.genre) {
		case "trending":
			fetchAnime = Apollo_GetAnimeListTrending({
				"variables": {
					"page": pagination.current,
					"sort": [
						"TRENDING_DESC",
						"POPULARITY_DESC"
					],
					"type": "ANIME"
				}
			})
			break;
		case "popular":
			fetchAnime = Apollo_GetAnimeListPopular({
				"variables": {
					"page": pagination.current,
					"sort": "POPULARITY_DESC",
					"type": "ANIME"
				}
			})
			break;
		case "next-session":
			fetchAnime = Apollo_GetAnimeListPopular({
				"variables": {
					"page": pagination.current,
					"season": "SUMMER",
					"seasonYear": 2022,
					"type": "ANIME"
				}
			})
			break;
		default:
			fetchAnime = Apollo_GetAnimeListTrending({
				"variables": {
					"page": pagination.current,
					"sort": [
						"POPULARITY_DESC"
					],
					"type": "ANIME"
				}
			})
			break;
	}

	const { data, loading } = fetchAnime;
	const previousData = usePrevious(data);

	useEffect(() => {
		let isMounted = true;

		if (typeof window !== "undefined" && isMounted) {
			window.addEventListener("scroll", handleScroll);
		}

		return () => {
			isMounted = false;
			window.removeEventListener("scroll", handleScroll);
		}
	}, [])

	useEffect(() => {
		if (doFetchMore && fetchAnime) {
			const { fetchMore } = fetchAnime;
			let variables = null;
			switch (params.genre) {
				case "trending":
					variables = {
						"page": pagination.current,
						"sort": [
							"TRENDING_DESC",
							"POPULARITY_DESC"
						],
						"type": "ANIME"
					}
					break;
				case "popular":
					variables = {
						"variables": {
							"page": pagination.current,
							"sort": "POPULARITY_DESC",
							"type": "ANIME"
						}
					}
					break;
				default:
					variables = {};
					break;
			}

			fetchMore({
				query: GET_ANIME_LIST_TRENDING,
				variables: variables,
				updateQuery: (previousResult, { fetchMoreResult }) => {
					const newEdges = fetchMoreResult.Page.media;
					const pageInfo = fetchMoreResult.Page.pageInfo.hasNextPage

					if (!fetchMoreResult) {
						return { ...previousResult };
					}

					if (!pageInfo) {
						window.removeEventListener("scroll", handleScroll);
					}

					if (newEdges.length && pageInfo) {
						const result = {
							Page: {
								...fetchMoreResult.Page,
								media: [
									...previousResult.Page.media,
									...fetchMoreResult.Page.media
								]
							}
						}
						return result;
					}

				},
			})
			setDoFetchMore(false)
		}
	}, [doFetchMore])

	const animeList = data ?? previousData;
	if (!animeList && loading) { return <PageAnimeListLoader /> }
	if (animeList) { return <PageAnimeListContent data={animeList.Page} title={params.genre} /> }
}

export default PageAnimeList;