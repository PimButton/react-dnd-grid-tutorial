import React, { useContext } from "react";
import DragItem from "./DragItem";
import { Grid, GridImage, GridItem } from "./Grid";
import GridContext from "./GridContext";

function App() {
  
  const { items, moveItem } = useContext(GridContext);

  function clickHandler(event){
    console.log(event.target.name);
    if(event.target.name == 'optie1'){

    }
    if(event.target.name == 'optie2'){
      
    }
    if(event.target.name == 'optie3'){
      
    }
    else{
      
    }
  }

  return (
    <div className="App">
      <Grid>
        {items.map((item, key) => (
          <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
            <GridItem id={`item-${key}`}>
              <GridImage src={item.src}></GridImage>
            </GridItem>
          </DragItem>
        ))}
      </Grid>

      <button name='optie1' onClick={clickHandler}>optie 1</button><button name='optie2' onClick={clickHandler}>optie 2</button><button name='optie3' onClick={clickHandler}>optie 3</button><button name='optie4' onClick={clickHandler}>optie 4</button>
    </div>
  );
}

export default App;
