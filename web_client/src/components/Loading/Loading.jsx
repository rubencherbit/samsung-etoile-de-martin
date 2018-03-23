import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Loading = ({className}) => (
    <div className={className}>
        <div className="loader-square square reg positioning">
            <div className="block">
                <div className="box"></div>
            </div>
        </div>
    </div>
)

Loading.propTypes = {
    className: PropTypes.string,
}

export default styled(Loading)`
.positioning {
  margin: 50px auto;
  position: relative;
}
.loader-square.positioning {
  position: absolute;
  top: 40%;
  left: 50%;
}

.loader-square {
  z-index: 10000;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.loader-square.square .block {
  border-radius: 4px;
  width: 74px;
  height: 74px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.loader-square.square .block:before, .loader-square.square .block:after {
  bottom: 2px;
}
.loader-square.square .block:before {
  left: 2px;
}
.loader-square.square .block:after {
  right: 2px;
}
.loader-square.square .block .box {
  left: 2px;
  top: 2px;
  -webkit-animation-name: slide;
          animation-name: slide;
}
.loader-square.reg .block {
  -webkit-animation-name: reg;
          animation-name: reg;
}
.loader-square .block {
  position: absolute;
  color: #499fa3;
  border: 2px solid;
  -webkit-transform: translate(-50%, -50%) rotate(-45deg);
          transform: translate(-50%, -50%) rotate(-45deg);
  -webkit-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
.loader-square .block:before, .loader-square .block:after {
  content: "";
  position: absolute;
  width: 32px;
  height: 32px;
  background: #499fa3;
  border-radius: 4px;
}
.loader-square .block:before {
  left: 2px;
}
.loader-square .block:after {
  right: 2px;
}
.loader-square .box {
  position: absolute;
  width: 32px;
  height: 32px;
  background: #499fa3;
  border-radius: 4px;
  -webkit-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@-webkit-keyframes slide {
  33% {
    left: 2px;
  }
  67%,
  100% {
    left: 36px;
  }
}

@keyframes slide {
  33% {
    left: 2px;
  }
  67%,
  100% {
    left: 36px;
  }
}
@-webkit-keyframes reg {
  50% {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
            transform: translate(-50%, -50%) rotate(45deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
            transform: translate(-50%, -50%) rotate(45deg);
  }
}
@keyframes reg {
  50% {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
            transform: translate(-50%, -50%) rotate(45deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
            transform: translate(-50%, -50%) rotate(45deg);
  }
}
`;