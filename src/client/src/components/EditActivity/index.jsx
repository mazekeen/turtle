import React from "react";
import { Container, ListGroupItem, ListGroup, InputGroup, Button, FormControl } from "react-bootstrap";
import EditActivityItem from '../EditActivityItem';
import './style.scss';
import "react-datepicker/dist/react-datepicker.css";

function EditActivity(props) {
    return (
        <Container className="edit-activity">
            <label className="edit-activity-label">Activity Name</label>
            <InputGroup className="edit-activity-name">
                <FormControl style={{fontFamily: "Raleway-Regular"}}
                    placeholder="Sport"
                    aria-label="name"
                />
                <InputGroup.Append>
                    <Button variant="dark" className="add-new-date-btn" >Add Date</Button>
                    <Button variant="secondary" className="delete-activity-btn">Delete</Button>
                </InputGroup.Append>
            </InputGroup>
            <ListGroup variant="flush" style={{ borderRadius: ".25rem" }}>
                <EditActivityItem />
                <EditActivityItem />
                <EditActivityItem />
            </ListGroup>
            <ListGroup className="buttons-end">
                <ListGroupItem>
                    <Button variant="secondary" className="save-all-btn">Save All</Button>
                </ListGroupItem>
            </ListGroup>
        </Container>
    );
};
export default EditActivity;
