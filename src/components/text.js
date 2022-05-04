import styled from '@emotion/styled';

const Paragraph = styled.p`
	font-size:${props => props.size}px;
	font-family:sans-serif;
	margin:10px 0;
	line-height: 16px;
`;

const Title_1 = styled.h1`
	font-family:sans-serif;
`;

const Title_2 = styled.h2`
	font-family:sans-serif;
`;

const Title_3 = styled.h3`
	font-family:sans-serif;
`;

const Title_4 = styled.h4`
	font-family:sans-serif;
`;

const Title_5 = styled.h5`
	font-family:sans-serif;
`;

const Title_6 = styled.h6`
	font-family:sans-serif;
`;

const Typography = ({ variant, children, size, ...other }) => {
	switch (variant) {
		case 'h1':
			return <Title_1 size={size} {...other}>
				{children}
			</Title_1>
		case 'h2':
			return <Title_2 size={size} {...other}>
				{children}
			</Title_2>
		case 'h3':
			return <Title_3 size={size} {...other}>
				{children}
			</Title_3>
		case 'h4':
			return <Title_4 size={size} {...other}>
				{children}
			</Title_4>
		case 'h5':
			return <Title_5 size={size} {...other}>
				{children}
			</Title_5>
		case 'h6':
			return <Title_6 size={size} {...other}>
				{children}
			</Title_6>
		default:
			return <Paragraph size={size} {...other}>
				{children}
			</Paragraph>
	}
}

export { Typography }