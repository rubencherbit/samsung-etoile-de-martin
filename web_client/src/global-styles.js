import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
	@import "node_modules/foundation-sites/scss/foundation";
	@import url('https://fonts.googleapis.com/css?family=Quicksand');

	html,
	body {
		height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
	}

	body {
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}

	body.fontLoaded {
		font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}

	#react {
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
