import { useQuery } from "@apollo/client";
import GET_ANIME_LIST from "./schema";

const Apollo_GetAnimeList = (variables) => useQuery(GET_ANIME_LIST, variables)

export default Apollo_GetAnimeList;