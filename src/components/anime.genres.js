import styled from '@emotion/styled';

const Genres = styled.div`
	display:flex;
	gap:5px;
`;

const GenresLabel = styled.label`
	background:#f3f3f3;
	border-radius:4px;
	font-size: ${props => props.size}px;
	font-family: sans-serif;
	font-weight: 400;
	padding: 5px 10px;
`;

export { Genres, GenresLabel }