import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router'

function Item ({item}) {
    return (
        <Col md={4} sm={6} xs={12} className="mb-4">
            <Card style={{ width: "100%", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", borderRadius: "10px" }}>
                <Card.Img variant="top" src={item.thumbnail}  />
                <Card.Body className="text-center">
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>{item.category}</Card.Text>
                    <Card.Text>${item.price}</Card.Text>
                    <Button variant="primary" className="fw-bold" as={Link} to={`/item/${item.id}`}>Ver Detalles</Button>
                </Card.Body>  
            </Card>
        </Col>
    )
}

export default Item
