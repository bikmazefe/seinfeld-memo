import {useState, useEffect} from 'react';
import Nav from './components/Nav'
import Item from './components/Item';
import ItemList from './ItemList';
import './App.css'

function App() {

  const [items, setItems] = useState([]);
  const [clickedItems, setClickedItems] = useState([]);
  const [topScore, setTopScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    const array = ItemList;
    setItems(randomizeArray(array));
  }, [])


  const randomizeArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {

      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      [array[i], array[j]] = [array[j], array[i]]; // swap items
    }
    return array;
  }

  const handleClick = (id) => {

    if (clickedItems.includes(id)) {

        if(currentScore > topScore){
          setTopScore(currentScore);
        }
        setCurrentScore(0)
        setClickedItems([]);

    } else {

      setCurrentScore(currentScore + 1);
      setClickedItems([...clickedItems, id])

    }
    
    setItems(randomizeArray(items));
  }

  return (
    <div className="App">
      <Nav 
        topScore = {topScore}
        currentScore = {currentScore}
      />
      <div className="item-wrapper">
        {items.map(item => {
          return <Item 
                    key = {item.id} 
                    item = {item} 
                    handleClick = {handleClick}
                    />
        })}
      </div>
    </div>
  );
}

export default App;
