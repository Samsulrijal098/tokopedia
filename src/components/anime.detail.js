import styled from '@emotion/styled';

const AnimeDetailBanner = styled.div`
	display: block;
	height:380px;
	background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(0, 0, 0, 0.6) 100%);
	position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

const AnimeDetailBannerImage = styled.img`
	height:100%;
	width: 100%;
	object-fit:cover;
	opacity:.5;
`;

const AnimeDescription = styled.div`
	display:flex;
	margin-top: 320px;
	padding:15px 0;
	position:relative;
	align-items:start;
`;

const AnimeCover = styled.div`
	display:block;
	width: 200px;
	margin-right:15px;
	flex: 0 0 25%;
	& button{
		margin-top:15px;
	}
`;

const AnimeCoverImage = styled.img`
	height:100%;
	width:100%;
	object-fit:cover;
`;

const AnimeDetail = styled.div`
	display:block;
	padding-bottom:10px;
	margin-top:60px;
`;

const AnimeInfo = styled.div`
	display:grid;
	gap:15px;
	padding:15px 0;
	grid-template-columns: 25% 75%;
`;

const AnimeInfoTrack = styled.div`
	display: block;
`

const AnimeInfoTrackList = styled.div`
	background: #f3f3f3;
	padding: 15px;
	margin-top: 15px;
	border-radius: 8px;
	& ul{
		padding:0;
		margin:0;
		list-style-type:none;
	}
	& ul li{
		padding-bottom: 15px;
		font-size:12px;
	}
	& ul li:last-child{
		padding-bottom: 0;
	}
`

const AnimeInfoSimilar = styled.div`
	display: block;
`;


const AnimeInfoSimilarContent = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 15px;
`;

export {
	AnimeDetail,
	AnimeDetailBanner,
	AnimeDetailBannerImage,
	AnimeDescription,
	AnimeCover,
	AnimeCoverImage,
	AnimeInfo,
	AnimeInfoTrack,
	AnimeInfoTrackList,
	AnimeInfoSimilar,
	AnimeInfoSimilarContent
}