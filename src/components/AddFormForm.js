import { Input } from 'antd';
import { useState } from 'react';

/* name, image, calories, servings */
function Form({ handleAddFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddFood({ name, image, calories, servings });
  };

  return (
    <form className="addForm" action="#" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">name:</label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">image:</label>
        <Input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="calories">calories:</label>
        <Input
          type="text"
          id="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="servings">servings:</label>
        <Input
          type="text"
          id="servings"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default Form;
