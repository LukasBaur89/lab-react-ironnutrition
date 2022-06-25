import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({ item, handleDelete }) {
  return (
    <div>
      <Col>
        <Card title={item.name} style={{ width: 230, height: 300, margin: 10 }}>
          <img src={item.image} height={60} alt="food" />
          <p>Calories: {item.calories}</p>
          <p>Servings: {item.servings}</p>
          <p>
            <b>
              Total Calories: {item.calories} * {item.servings}{' '}
            </b>{' '}
            kcal
          </p>
          <Button onClick={() => handleDelete(item.name)} type="primary">
            {' '}
            Delete{' '}
          </Button>
        </Card>
      </Col>
    </div>
  );
}

export default FoodBox;
