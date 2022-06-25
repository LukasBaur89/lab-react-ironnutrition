import { Input } from 'antd';

function Search({ searchFood, setSearchFood }) {
  return (
    <div className="searchBar">
      <label htmlFor="search">search</label>
      <Input
        type="text"
        placeholder="Search for Food"
        value={searchFood}
        onChange={(e) => setSearchFood(e.target.value)}
      ></Input>
    </div>
  );
}

export default Search;
