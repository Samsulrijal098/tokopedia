import { useQuery } from "@apollo/client";
import GET_ANIME_DETAIL from "./schema";

const Apollo_GetAnimeDetail = (variables) => useQuery(GET_ANIME_DETAIL, variables)

export default Apollo_GetAnimeDetail;