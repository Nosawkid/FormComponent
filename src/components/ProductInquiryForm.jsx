import { Button, Container, Form, Card } from "react-bootstrap";
import { Form as RouterForm, useActionData } from "react-router-dom";

const ProductInquiryForm = () => {
  const data = useActionData();

  return (
    <Container style={{ maxWidth: "600px", marginTop: "20px" }}>
      {data && data.submission && (
        <Card>
          <Card.Body>
            <Card.Title>{data.submission.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {data.submission.email}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              {data.submission.phone}
            </Card.Subtitle>
            <Card.Text>{data.submission.message}</Card.Text>
          </Card.Body>
        </Card>
      )}
      <RouterForm method="POST" action="/">
        <h3>Contact Us</h3>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            name="name"
            type="text"
            placeholder="Enter your name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            required
            name="phone"
            type="text"
            placeholder="Enter your contact number"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control required as="textarea" rows={3} name="message" />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </RouterForm>
    </Container>
  );
};

export default ProductInquiryForm;

export const formAction = async ({ request }) => {
  console.log(request);
  const data = await request.formData();
  const submission = {
    name: data.get("name"),
    email: data.get("email"),
    phone: data.get("phone"),
    message: data.get("message"),
  };

  return { submission };
};
