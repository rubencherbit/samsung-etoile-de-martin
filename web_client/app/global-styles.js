import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
	@import "node_modules/foundation-sites/scss/foundation";
	@import url('https://fonts.googleapis.com/css?family=Quicksand');

	html,
	body {
		height: 100%;
		width: 100%;
	}

	body {
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}

	body.fontLoaded {
		font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}

	#app {
		background-color: #fafafa;
		min-height: 100%;
		min-width: 100%;
	}

	p, h1, h2, h3, h4, h5, h6, a, li, span, label {
		font-family: 'Quicksand', sans-serif;
	}

	p,
	label {

		line-height: 1.5em;
	}

	.header {
		background-color:#fff;
		padding: 10px;
		border:1px solid #e5e5e5;
		box-shadow: 0 0 1px 0px rgba(0,0,0, .1);
		display: flex;
		justify-content: space-between;
		align-items:center;
		& a {
			color:#fff;
			text-decoration: none;
			font-weight: bold;
		}

		& img {
			max-width: 100%;
			width: 150px;
		}

		& p {

			font-size: .9rem;
			background-color: #d13581;
			margin 0;
			padding: 10px;
			border-radius: 2px;
			box-shadow: 0 0 1px 0px rgba(0,0,0, .1);
			border:1px solid #e5e5e5;
			cursor: pointer;

			&:first-letter {
				text-transform:uppercase; 
			}
		}

	}

	.container {
		&-text {
			h1 {
				span {
					font-size: 1.25rem; 
					color:#545454;
				}
			}
		}
	}
`;