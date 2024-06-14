import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/ContactUsForm.css';

function ContactUsForm() {
    return (
        <Form className="contact-form">
            <h2 className="form-title">Talk to our Experts.</h2>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="name" placeholder="Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMobile">
                <Form.Control type="mobile" placeholder="Mobile Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Control as="textarea" rows={3} placeholder="Message" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="*By submitting this form, I confirm that I have read and agreed to accept NestDream's privacy policy." />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default ContactUsForm;