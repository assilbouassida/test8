import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddMovie = ({handleAdd}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("")
  const [description, setDescription] = useState("")
  const [posterUrl, setPosterUrl] = useState("")
  const addMovie = () => {
      const newMovie = {title,rate,description,posterUrl}
      if(title && rate && description && posterUrl){
          handleAdd(newMovie)
          handleClose()
          setTitle("")
          setRate("")
          setDescription("")
          setPosterUrl("")
      }
      else alert("Field should not be empty")
  }
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <label htmlFor="">Rate</label>
            <input
              type="text"
             
              className="form-control"
              onChange={(e) => setRate(e.target.value)}
              value={rate}
            />
            <label htmlFor="">Description</label>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
             <label htmlFor="">Poster</label>
            <input
              type="text"
             
              className="form-control"
              onChange={(e) => setPosterUrl(e.target.value)}
              value={posterUrl}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
