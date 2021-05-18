
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

import { useSelector } from 'react-redux';

const Product = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;  // this return an array
  const checkItem = cartItems.some((item) => {
    return item.product === product._id
  })
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong style={{ color: '#e07a5f' }}>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text>{checkItem ?
          <h6 style={{ backgroundColor: 'pink' }}>Item has been added to 🛒</h6> :
          <h4>${product.price}</h4>}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;