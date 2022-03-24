import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

	a {
		color: ${({ theme }) => theme.shift.text};
		&:hover {
			color: #00adb5;
		}
	}

	input, label, textarea {
		display: block;
	}

	html {
		max-width: 1350px;
		margin: auto;
		background: ${({ theme }) => theme.shift.html};
		background-image: ${({ theme }) => theme.shift.bilde};
		object-fit: fill;
	}

	.gridview{
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;;
		@media(max-width: 1350px) {
			grid-template-columns: repeat(3, 1fr);
		}
		@media(max-width: 1000px) {
			grid-template-columns: repeat(2, 1fr);
			justify-content: center;
		}
		@media(max-width: 650px) {
			grid-template-columns: repeat(1, 1fr);
			justify-content: center;
		}
	}

	.listview{
		display: grid;
	}

	.articlegridview, .articlelistview {
		display: grid;
		border: 1px solid #ddd;
		margin: 10px auto;
		position: relative;
		background-color: white;
  	&:hover {
    	box-shadow: 4px 4px 10px #999;
 	 	}
		& img {
			width: 300px;
			height: 373px;
		}
	}

	.articlegridview {
		grid-template-rows: 373px;
		width: 300px;
	}

	.articlelistview {
		grid-template-columns: auto 1fr;
		gap: 20px;
		width: 100%;
		height: 373px;
	}

	.featuredimage, .featuredarticleimage {
		&::before {
			display: block;
			position: absolute;
			background: #810034;
			color: #fed049;
			content: 'FEATURED ⭐';
			text-align: center;
			width: 100%;
			height: 60px;
			line-height: 60px;
			font-size: 40px;
		}
	}

	.featuredimage {
		&::before {
			bottom: 5px;
		}
	}

	.featuredarticleimage {
		&::before {
			bottom: 0;
		}
	}
`;

export default GlobalStyles;
