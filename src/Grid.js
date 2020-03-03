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

const GridItemWrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  align-self: stretch;
  box-sizing: border-box;
  
  //doesn't work
  @media only screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr!important;
  }

  //option breedbeeld ------------------------
  grid-column:span 2;

`;

const GridItemWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  align-self: stretch;
  box-sizing: border-box;

  //option super breedbeeld
  grid-column:span 4;


`;

const GridItemWrapper3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  align-self: stretch;
  box-sizing: border-box;

  //option 3 custom -----------------------
  :nth-child(10n +1){
    grid-column: span 2;
    grid-row: span 2;
  }
  :nth-child(10n +2){
    grid-column: span 2;
  }
  :nth-child(10n +3){
    grid-column: span 2;
  }
  :nth-child(10n +4){
    grid-column: span 2;
  }
  :nth-child(10n +5){
    grid-column: span 2;
    grid-row: span 2;
  }
  :nth-child(10n +6){
    grid-column: span 2;
  }


`;

const GridItemWrapper4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  align-self: stretch;
  box-sizing: border-box;

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

export const GridItem = ({ forwardedRef, ...props }) => {
  switch(props.currentStyle) {
    case 'option1':
      return <GridItemWrapper1 ref={forwardedRef} {...props} />
      break;
      case 'option2':
      return <GridItemWrapper2 ref={forwardedRef} {...props} />
      break;
      case 'option3':
      return <GridItemWrapper3 ref={forwardedRef} {...props} />
      break;
      case 'option4':
      return <GridItemWrapper4 ref={forwardedRef} {...props} />
      break;
      default:
        return <GridItemWrapper4 ref={forwardedRef} {...props} />
        break;
}
};


