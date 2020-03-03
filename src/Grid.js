import React from "react";
import styled from "styled-components";

export const Grid = styled.div`
  max-width:100vw;
  width:auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 150px;
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
  
  //doesn't work
  @media only screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr!important;
  }

  // :before {
  //   content: "";
  //   display: table;
  //   padding-top: 100%;
  // }
//-----------------------------

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

  //option repeat  --------------------------
  // :nth-child(3n){
  //   grid-column: span 2;
  //   grid-row: span 2;
  // }

  //option breedbeeld ------------------------
  // grid-column:span 2;

  //option super breedbeeld
  // grid-column:span 4;

  // option 3 custom -----------------------
  // :nth-child(10n +1){
  //   grid-column: span 2;
  //   grid-row: span 2;
  // }
  // :nth-child(10n +2){
  //   grid-column: span 2;
  // }
  // :nth-child(10n +3){
  //   grid-column: span 2;
  // }
  // :nth-child(10n +4){
  //   grid-column: span 2;
  // }
  // :nth-child(10n +5){
  //   grid-column: span 2;
  //   grid-row: span 2;
  // }
  // :nth-child(10n +6){
  //   grid-column: span 2;
  // }

  //option 4 custom -------------------------
    :nth-child(10n +1){
      grid-column: span 2;
    }
    :nth-child(10n +2){
      grid-column: span 2;
      grid-row: span 3;
    }
    :nth-child(10n +3){
    }
    :nth-child(10n +4){
    }
    :nth-child(10n +5){
      grid-column: span 2;
    }
    :nth-child(10n +6){
      grid-column: span 2;
      grid-row: span 3;
    }
    :nth-child(10n +7){
      grid-column: span 2;
    }
    :nth-child(10n +8){
    }
    :nth-child(10n +9){
    }
    :nth-child(10n +10){
      grid-column: span 2;
    }

`;

export const GridItem = ({ forwardedRef, ...props }) => (
  <GridItemWrapper ref={forwardedRef} {...props} />
);


