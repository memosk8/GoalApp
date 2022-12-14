import styled from 'styled-components';

export const Box = styled.div`
padding: 70px 60px;
background: #5F4f1591;
position: relative;
width: 100%;
maring-top: 20px;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: auto auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;

`;

export const Row = styled.div`
display: grid;

grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #000000;

margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
text-align: center;

&:hover {
	color: teal;
	transition: 400ms ease-in;
}
`;

export const Heading = styled.p`

font-size: 24px;
color: dark;
margin: 30px 0;
font-weight: bold;
text-align: center;
`;
