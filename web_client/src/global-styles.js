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
		color: black;
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
	.grid-container{
        width: 100%; 
        max-width: 1200px;      
    }

    /*-- our cleafix hack -- */ 
    .row:before, 
    .row:after {
        content:"";
        display: table ;
        clear:both;
    }

    [class*='col-'] {
        float: left; 
        min-height: 1px; 
        width: 16.66%; 
        /*-- our gutter -- */
        padding: 12px; 
    }

    .col-1{ width: 16.66%; }
    .col-2{ width: 33.33%; }
    .col-3{ width: 50%;    }
    .col-4{ width: 66.66%; }
    .col-5{ width: 83.33%; }
    .col-6{ width: 100%;   }

    .outline, .outline *{
        outline: 1px solid #F6A1A1; 
    }

    /*-- some extra column content styling --*/
    [class*='col-'] > p {
     padding: 0;
     margin: 0;
     text-align: center; 
	}
	@media all and (max-width:800px){
        .col-1{ width: 33.33%;  }
        .col-2{ width: 50%;     }
        .col-3{ width: 83.33%;  }
        .col-4{ width: 100%;    }
        .col-5{ width: 100%;    }
        .col-6{ width: 100%;    }

        .row .col-2:last-of-type{
            width: 100%; 
        }

        .row .col-5 ~ .col-1{
            width: 100%; 
        }
	}
	@media all and (max-width:650px){
        .col-1{ width: 50%;     }
        .col-2{ width: 100%;    }
        .col-3{ width: 100%;    }
        .col-4{ width: 100%;    }
        .col-5{ width: 100%;    }
        .col-6{ width: 100%;    }
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
			background-image: -webkit-linear-gradient(top, #34d99c, #42eda9);
			background-image: -moz-linear-gradient(top, #34d99c, #42eda9);
			background-image: -ms-linear-gradient(top, #34d99c, #42eda9);
			background-image: -o-linear-gradient(top, #34d99c, #42eda9);
			background-image: linear-gradient(to bottom, #34d99c, #42eda9);
			-webkit-border-radius: 8;
			-moz-border-radius: 8;
			border-radius: 8px;
			font-family: Courier New;
			color: #ffffff;
			font-size: 20px;
			padding: 2px 4px 2px 4px;
			margin-right: 1rem;
			text-decoration: none;
        }

        .btn.normal:hover {
            background: #29f700;
			background-image: -webkit-linear-gradient(top, #29f700, #00ff00);
			background-image: -moz-linear-gradient(top, #29f700, #00ff00);
			background-image: -ms-linear-gradient(top, #29f700, #00ff00);
			background-image: -o-linear-gradient(top, #29f700, #00ff00);
			background-image: linear-gradient(to bottom, #29f700, #00ff00);
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
