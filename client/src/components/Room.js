import React, { useState, useEffect } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./Room.css"

function Room({ room, fromDate, toDate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="row bs">
      <div className="col-md-4">
        <img src={room.imageurls[0]} className="smallimg" alt="" />
      </div>
      <div className="col-md-7">
        <h1 className="roomName">{room.name}</h1>
        <b>
          <p>Max Count : {room.maxcount}</p>
          <p>Phone Number : {room.phonenumber}</p>
          <p>Type : {room.type}</p>
        </b>

        <div style={{ float: "right" }}>
          {fromDate && toDate && (
            <Link to={`/book/${room._id}/${fromDate}/${toDate}`}>
              <button className="btn btn-primary mb-2"> Book                  Now   </button>
            </Link>
          )}

          <button className="btn btn-primary" onClick={handleShow}>
            View Detail
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" className="custom-modal">
  <Modal.Header closeButton className="custom-header">
    <Modal.Title className="custom-title">{room.name}</Modal.Title>
  </Modal.Header>
  <Modal.Body className="custom-body">
    <Carousel prevLabel="" nextLabel="">
      {room.imageurls.map((url, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 bigimg"
              src={url}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
    <p className="custom-description">{room.description}</p>
  </Modal.Body>
  <Modal.Footer className="custom-footer">
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
  </Modal.Footer>
</Modal>

    </div>
  );
}

export default Room;
