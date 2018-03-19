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

	.btn.pink {
		color:#fff!important;
		text-decoration: none;
        font-weight: bold;
        text-tranform: capitalize;
        font-size: .9rem;
		background-color: #d13581;
		padding: 10px;
		border-radius: 2px;
		box-shadow: 0 0 1px 0px rgba(0,0,0, .1);
		border:1px solid #e5e5e5;
		cursor: pointer;
	}
	    .btn.normal {
            background: #34d99c;
            background-image: -webkit-linear-gradient(top, #34d99c, #2980b9);
            background-image: -moz-linear-gradient(top, #34d99c, #2980b9);
            background-image: -ms-linear-gradient(top, #34d99c, #2980b9);
            background-image: -o-linear-gradient(top, #34d99c, #2980b9);
            background-image: linear-gradient(to bottom, #34d99c, #2980b9);
            -webkit-border-radius: 28;
            -moz-border-radius: 28;
            border-radius: 28px;
            font-family: Arial;
            color: #ffffff;
            font-size: 25px;
            padding: 10px 20px 10px 20px;
            text-decoration: none;
        }

        .btn.normal:hover {
            background: #3cb0fd;
            background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
            background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
            background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
            background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
            background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
            text-decoration: none;
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
