import React, { useState } from "react";
import { Form, Row, Col, Modal, ModalFooter } from "react-bootstrap";
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from 'uuid';
import DatePicker from 'react-datepicker';
import Alert from '../Alert';
import { useGlobalContext } from '../Context';
import './style.scss';

function CreateActivity() {
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [executedAt, setExecutedAt] = useState(new Date());
    const [alert, setAlert] = useState({
        show: false,
        msg: '',
        type: '',
    });
    const {isActivityCreateFormOpen, closeActivityCreateForm, createActivity} = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setAlert({
                show: true,
                type: 'danger',
                msg: 'Please enter a name'
            });
            return;
        }
        if (!executedAt) {
            setAlert({
                show: true,
                type: 'danger',
                msg: 'Please enter executedAt'
            });
            return;
        }
        if (!duration) {
            setAlert({
                show: true,
                type: 'danger',
                msg: 'Please enter duration'
            });
            return;
        }

        createActivity({
            id: uuidv4(),
            name,
            executedAt: executedAt,
            duration: Number(duration)
        });
        closeActivityCreateForm();
    };

    return(
        <Modal show={isActivityCreateFormOpen} onHide={closeActivityCreateForm}>
            {alert.show && <Alert {...alert} removeAlert={setAlert} duration={3000} />}
            <ModalHeader>
                <Modal.Title className="create-activity-name">Create Activity</Modal.Title>
            </ModalHeader>
            <Col>
                <Row className="bg">
                    <Form className='create-activity-form'>
                        <input
                            type='text'
                            className='create-activity-title'
                            placeholder='Activity Name'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form>
                </Row>
                <Row>
                    <Col>
                        <Form.Label className="edit-activity-date">Pick date:</Form.Label>
                        <DatePicker
                            className="edit-activity-date-input"
                            selected={executedAt}
                            onChange={(date) => setExecutedAt(date)}
                        />
                    </Col>
                    <Col className="edit-activity">
                        <Form.Label className="edit-activity-time">Pick duration(h):</Form.Label>
                        <Form.Control className="edit-activity-time-text" size="sm" type="number" min="0" placeholder='ex: 2' onChange={(e) => setDuration(e.target.value)}/>
                    </Col>
                </Row>
            </Col>
            <ModalFooter>
                <button className="modal-save-btn" onClick={handleSubmit}>Save</button>
            </ModalFooter>
        </Modal>
    );
}

export default CreateActivity;
