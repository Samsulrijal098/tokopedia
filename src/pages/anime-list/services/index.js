import { useQuery } from "@apollo/client";
import { GET_ANIME_LIST_TRENDING, GET_ANIME_LIST_POPULAR } from "./schema";

const Apollo_GetAnimeListTrending = (variables) => useQuery(GET_ANIME_LIST_TRENDING, variables);
const Apollo_GetAnimeListPopular = (variables) => useQuery(GET_ANIME_LIST_POPULAR, variables);


export { Apollo_GetAnimeListTrending, Apollo_GetAnimeListPopular };