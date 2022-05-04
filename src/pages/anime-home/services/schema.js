import { gql } from "@apollo/client";

const GET_ANIME_LIST = gql`
	query(
		$season: MediaSeason,
		$seasonYear: Int,
	){
		trending: Page(page: 1, perPage: 20){
			media(
				sort: TRENDING_DESC,
				type: ANIME,
				isAdult: false
			){
				...media
			}
		}
		season: Page(page: 1, perPage: 20){
			media(
				season: $season,
				seasonYear: $seasonYear,
				sort: POPULARITY_DESC,
				type: ANIME, isAdult: false
			)
			{
				...media
			}
		}
		popular: Page(page: 1, perPage: 20){
			media(
				sort: POPULARITY_DESC,
				type: ANIME, isAdult: false
			){
				...media
			}
		}
	}
	fragment
	media on Media{
		id
		title{
			userPreferred
		}
		coverImage{
			extraLarge
			large
			color
		}
		startDate{
			year
			month
			day
		}
		endDate{
			year
			month
			day
		}
		bannerImage
		season
		seasonYear
		description
		type
		format
		status(version: 2)
		episodes
		duration
		chapters
		volumes
		genres
		isAdult
		averageScore
		popularity
		mediaListEntry{
			id
			status
		}
		nextAiringEpisode{
			airingAt
			timeUntilAiring
			episode
		}
		studios(isMain: true){
			edges{
				isMain
				node{
					id
					name
				}
			}
		}
	}
`;

export default GET_ANIME_LIST