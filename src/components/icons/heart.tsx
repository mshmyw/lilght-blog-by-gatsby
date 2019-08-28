import React from 'react'
import styled from 'styled-components'

const SvgWrapper = styled.svg`
width: 1em;
height: 1em;
display: inline-block;

animation: heartAnimate 1.33s ease-in-out infinite;
fill: #f06292;
margin: 0 0.5em 0 0.5em;

@keyframes heartAnimate {
  0%,100%{transform:scale(1);}
  10%,30%{transform:scale(0.9);}
  20%,40%,60%,80%{transform:scale(1.1);}
  50%,70%{transform:scale(1.1);
  }
`
const SvgComponent = props => (
  <SvgWrapper
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
  </SvgWrapper>
)

export default SvgComponent
