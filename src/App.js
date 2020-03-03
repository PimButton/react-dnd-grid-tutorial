import React, { useContext } from "react";
import DragItem from "./DragItem";
import { Grid, GridImage, GridItem } from "./Grid";
import GridContext from "./GridContext";

function App() {
  
  const { items, moveItem, currentStyle, changeStyle } = useContext(GridContext);
  console.log(items);
  console.log(currentStyle);

  return (
    <div className="App">
      <Grid>
        {items.map((item, key) => (
          <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
            <GridItem key={item.id} currentStyle={currentStyle}>
              <GridImage src={item.src}></GridImage>
              {/* <span>{key}</span> */}
            </GridItem>
          </DragItem>
        ))}
      </Grid>

      <button name='optie1' onClick={() => changeStyle('option1')}>optie 1</button><button name='optie2' onClick={() => changeStyle('option2')}>optie 2</button><button name='optie3' onClick={() => changeStyle('option3')}>optie 3</button><button name='optie4' onClick={() => changeStyle('option4')}>optie 4</button>
    </div>
  );
}

export default App;
