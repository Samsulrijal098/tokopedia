import styled from '@emotion/styled';

const Button = styled.button`
	background: #d754bc;
	padding: 10px 25px;
	width:${props => props.fullWidth ? '100%' : 'auto'};
	border-radius: 5px;
	border:none;
	color: white;
	display:flex;
	align-items:center;
	justify-content:center;
	text-align:center;
	gap:5px;
	transition:.5s ease;
  &:hover {
    background: #80176a;
  }
`;

export default Button;