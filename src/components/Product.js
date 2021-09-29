import React from "react"
import { Card } from "react-bootstrap"
const Product = (props) => {
  const { image, name, rating, numReviews, price } = props.product

  return (
    <div>
      <Card className="my-3">
        <a href={`/product/${props.product._id}`}>
          <Card.Img src={image} varient="top" />
        </a>
        <Card.Body>
          <a href={`/product/${props.product._id}`}>
            <Card.Text as="div">
              <strong>{name}</strong>
            </Card.Text>
          </a>
          <Card.Text as="div">
            <div class="my-3">
              {rating} from {numReviews} reviews
            </div>
          </Card.Text>
          <Card.Text as="h3">
            <div class="my-3">${price}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
