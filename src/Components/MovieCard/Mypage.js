import React from 'react'
import { Card,Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
const Mypage = ({ match, movies }) => {
    const findProduct = movies.find((movie) => movie.id == match.params.id);
    return (
        <div>
             <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={findProduct.posterUrl} />
        <Card.Body>
          <Card.Title>{findProduct.title}</Card.Title>
          <Card.Text>{findProduct.description}</Card.Text>
        </Card.Body>
      </Card>
      <Link to="/">
            <Button variant="primary">go back</Button>
          </Link>
            
        </div>
    )
}

export default Mypage
