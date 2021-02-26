import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Form, ListGroupItem, Button ,Row, Col } from "react-bootstrap";
import './style.scss';
import "react-datepicker/dist/react-datepicker.css";

function EditActivityItem() {
    const [startDate, setStartDate] = useState(new Date());
    return(
        <ListGroupItem>
            <Row>
                <Col>
                    <Form.Label className="edit-activity-date">Pick date:</Form.Label>
                    <DatePicker dateFormat="dd/MM/yyyy " className="custom-input" selected={startDate} onChange={date => setStartDate(date)} />
                </Col>
                <Col>
                    <Form.Label className="edit-activity-time">Pick time(h):</Form.Label>
                    <Form.Control className="edit-activity-time-text" size="sm" type="text" placeholder='ex: 2' />
                    <Button variant="secondary" className="delete-btn">Delete</Button>
                </Col>
            </Row>
        </ListGroupItem>
    );
}

export default EditActivityItem;
