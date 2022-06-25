import useItems from 'antd/lib/menu/hooks/useItems';
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/AddFormForm';
import Search from './components/Search';
import { useEffect } from 'react';

function App() {
  const [food, setFood] = useState(foods);
  const [searchFood, setSearchFood] = useState('');
  const [filterFood, setFilterFood] = useState(foods);

  const handleAddFood = (f) => {
    setFood([...food, f]);
  };

  /* let searchedFood = null;
if (searchFood !== '') {
    searchedFood = filterFood.filter((item) => {
      return item.name.toLowerCase().includes(searchFood.toLowerCase());
    });
    setFilterFood(
      filterFood.filter((item) => {
        return item.name.toLowerCase().includes(searchFood.toLowerCase());
      })
    );
  } */

  useEffect(() => {
    if (searchFood !== '') {
      /*  searchedFood = filterFood.filter((item) => {
        return item.name.toLowerCase().includes(searchFood.toLowerCase());
      }); */
      setFilterFood(
        filterFood.filter((item) => {
          return item.name.toLowerCase().includes(searchFood.toLowerCase());
        })
      );
    } else {
      setFilterFood(food);
    }
    /* searchFood.filter((box) => {
      return box.name.toLowerCase().includes(searchFood.toLowerCase());
    }); */
  }, [searchFood]);

  const handleDelete = (name) => {
    const deleteItem = filterFood.filter((item) => item.name !== name);
    setFilterFood(deleteItem);
  };
  console.log(handleDelete);

  return (
    <div className="App">
      <h1>Add Food Entry</h1>
      <Form handleAddFood={handleAddFood}></Form>
      <hr />
      <h1>Search</h1>
      <Search searchFood={searchFood} setSearchFood={setSearchFood}></Search>
      <h1>Food List</h1>
      <div className="appContainer">
        {filterFood.map((item) => {
          return (
            <FoodBox
              key={item.name}
              item={item}
              handleDelete={handleDelete}
            ></FoodBox>

            /* <div>
            <p>{item.name}</p>
            <img src={item.image} style={{ width: 250 }} alt="" />
          </div> */
          );
        })}
      </div>
    </div>
  );
}
export default App;
