import styled from '@emotion/styled';

const Grid = styled.div`
	display:grid;
	gap:15px;
	@media (min-width: 420px) {
		grid-template-columns: repeat(${props => props.md}, 1fr);
	}
	@media (max-width: 420px) {
		grid-template-columns: repeat(${props => props.xs}, 1fr);
	}
`

export default Grid;