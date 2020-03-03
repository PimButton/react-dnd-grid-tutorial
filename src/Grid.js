import React from "react";
import styled from "styled-components";

export const Grid = styled.div`
  max-width:100vw;
  width:auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;
  justify-content: start;
  flex-wrap: wrap;
`;

export const GridImage = styled.div`
  width:100%;
  height:auto;
  border: 1px solid white;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${props => `url("${props.src}")`};
  background-size: cover;
  background-position: 50%;
`;

const GridItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  align-self: stretch;
  box-sizing: border-box;

  //option 1
  // :nth-child(6){
  //   grid-column: span 2; 
  //   grid-row: span 2;
  // }
  // :nth-child(5){
  //   grid-column: span 2;
  //   grid-row: span 2;
  // }

  // //option 2
  // :nth-child(2){
  //   grid-column: span 3; 
  //   grid-row: span 3;
  // }
  // :nth-child(5){
  //   grid-column: span 2;
  //   grid-row: span 2;
  // }
  //option repeat 
  :nth-child(3n){
    grid-column: span 2;
    grid-row: span 2;
  }


  :before {
    content: "";
    display: table;
    padding-top: 100%;
  }

`;

export const GridItem = ({ forwardedRef, ...props }) => (
  <GridItemWrapper ref={forwardedRef} {...props} />
);


