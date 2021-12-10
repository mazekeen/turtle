import React, { useState } from "react";
import { Modal, ModalFooter, Row, Col, Form } from "react-bootstrap";
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGlobalContext } from '../Context';
import DatePicker from 'react-datepicker';
import './style.scss';
import Alert from '../Alert';

function EditActivity() {
    const {
        isEditActivityFormOpen,
        closeActivityEditForm,
        removeActivity,
        updateActivity,
        editFormActivity
    } = useGlobalContext();

    const [duration, setDuration] = useState(editFormActivity.duration);
    const [executedAt, setExecutedAt] = useState(editFormActivity.executedAt);
    const [items, setItems] = useState(editFormActivity.items);
    const [alert, setAlert] = useState({
        show: false,
        msg: '',
        type: '',
    });

    const submitEdit = (e) => {
        e.preventDefault();
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
        updateActivity({
            id: editFormActivity.id,
            executedAt: executedAt,
            duration: Number(duration)
        });
        closeActivityEditForm();
    };

    const addActivityItemRow = () => {
        return (
            <Row>
                <Col>
                    <Form.Label className="edit-activity-date">Pick date:</Form.Label>
                    <DatePicker dateFormat="dd-MM-yyyy" className="edit-activity-date-input" selected={executedAt} onChange={(date) => setExecutedAt(date)} />
                </Col>
                <Col className="edit-activity">
                    <Form.Label className="edit-activity-time">Pick duration(h):</Form.Label>
                    <Form.Control className="edit-activity-time-text" size="sm" type="number" min="0" placeholder='ex: 2' value={duration} onChange={(e) => setDuration(e.target.value)} />
                </Col>
            </Row>
        );
    }


    return (
        <Modal show={isEditActivityFormOpen} onHide={closeActivityEditForm}>
            {alert.show && <Alert {...alert} removeAlert={setAlert} duration={3000} />}
            <ModalHeader>
                <Modal.Title className="activity-name">Edit Activity</Modal.Title>
            </ModalHeader>
            <Col>
                <Row className="bg">
                <div className="bg-activity-title">{editFormActivity?.name}</div>
                    <button onClick={() => removeActivity(editFormActivity.id)} className="bg-remove">
                        <FontAwesomeIcon icon="trash" color="#464646" />
                    </button>
                </Row>
                <Row>
                    <Col>
                        <Form.Label className="edit-activity-date">Date:</Form.Label>
                        <DatePicker
                            className="edit-activity-date-input"
                            selected={executedAt}
                            onChange={(date) => setExecutedAt(date)}
                        />
                    </Col>
                    <Col className="edit-activity">
                        <Form.Label className="edit-activity-time">Duration(h):</Form.Label>
                        <Form.Control className="edit-activity-time-text"
                            size="sm"
                            type="number"
                            min="0"
                            placeholder='ex: 2'
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <button onClick={addActivityItemRow} className="list-add-edit-btn">
                            <FontAwesomeIcon icon="plus" />
                        </button>
                    </Col>
                </Row>
            </Col>
            <ModalFooter>
                <button className="modal-save-btn" onClick={submitEdit}>Save</button>
            </ModalFooter>
        </Modal>
    );
}

export default EditActivity;

