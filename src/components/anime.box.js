import styled from '@emotion/styled';

const AnimeBox = styled.div`
	display: block;
`;

const AnimeBoxImage = styled.div`
	display:block;
	height: 150px;
	overflow:hidden;
	border-top-left-radius:4px;
	border-top-right-radius:4px;
	border: 1px solid #f3f3f3;
`;

const AnimeBoxDetail = styled.div`
	padding:5px;
	border-bottom-left-radius:4px;
	border-bottom-right-radius:4px;
	border-bottom: 1px solid #f3f3f3;
	border-left: 1px solid #f3f3f3;
	border-right: 1px solid #f3f3f3;
`;

const AnimeImage = styled.img`
	height:100%;
	width:100%;
	object-fit:cover;
`;

export { AnimeBox, AnimeBoxImage, AnimeImage, AnimeBoxDetail };