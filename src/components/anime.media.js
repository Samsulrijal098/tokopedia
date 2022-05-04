import styled from '@emotion/styled';

const AnimeMedia = styled.div`
	display:flex;
	align-items:start;
	flex-direction:column;
	position: relative;
`;

const AnimeMediaImageWrapper = styled.div`
	display:block;
	height:250px;
	width:100%;
`;

const AnimeMediaDescWrapper = styled.div`
	text-align:left;
	position:absolute;
	left:0;
	right:25%;
	background:white;
	bottom:0;
	padding: 5px 15px;
	border-top-right-radius: 15px;
	& p{
		font-weight: 600;
		margin:5px 0;
	}
`;


export { AnimeMedia, AnimeMediaImageWrapper, AnimeMediaDescWrapper }

