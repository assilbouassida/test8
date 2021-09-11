import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const MovieCard = ({ movie ,history }) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-3">
      <Card.Img height="350" variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          <ReactStars
            count={5}
            value={movie.rate}
            size={30}
            activeColor="#ffd700"
            isHalf={true}
            edit={false}
          />
        </Card.Text>
        
        <Link to={`/data/${movie.id}`}><Button variant="primary">Go somewhere</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
