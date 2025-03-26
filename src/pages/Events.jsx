import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import show1 from "../assets/show1.avif"
const Events = () => {
  const events = [
    {
      name: "Sunburn Festival",
      location: "Goa",
      date: "2025-01-15",
      time: "6:00 PM",
      price: "₹2000",
      image: "https://images.unsplash.com/photo-1626093995690-ffd76c692ac8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bmJ1cm4lMjBmZXN0aXZhbCUyMGV2ZW50fGVufDB8fDB8fHww"
    },
    {
      name: "Comedy Night",
      location: "Bangalore",
      date: "2025-02-20",
      time: "8:00 PM",
      price: "₹500",
      image: "https://images.unsplash.com/photo-1611956425642-d5a8169abd63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhbmR1cCUyMGNvbWVkeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Tech Conference",
      location: "Mumbai",
      date: "2025-03-05",
      time: "10:00 AM",
      price: "₹1500",
      image: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGNvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Upcoming Events</h2>
      <Row>
        {events.map((event, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={event.image} alt={event.name} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                  📍 {event.location} <br />
                  📅 {event.date} | 🕒 {event.time} <br />
                  🎟 {event.price}
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
