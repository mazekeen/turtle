import React from 'react';
import { Modal, ModalFooter} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-day-picker/lib/style.css';
import CreateActivity from '../CreateActivity';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';


function Menu(props) {
    const [isOpen, setIsOpen] = React.useState(false);

    const showCreateModal = () => {
        setIsOpen(true);
    };

    const hideCreateModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={'menu ' + props.className || ''}>
            <ul className="menu-group">
                <li className="menu-title">
                    <div className="menu-title-text">
                        My Activities List
                    </div>
                    <button onClick={showCreateModal} className="menu-add-btn">
                        <FontAwesomeIcon icon="plus" />
                    </button>
                </li>
                <li className="menu-item">
                    <div className="menu-item-name">
                        Sleeping
                    </div>
                    <Link to="/edit" className="menu-item-edit-btn">
                        <FontAwesomeIcon icon="pencil-alt" />
                    </Link>
                </li>
                <li className="menu-item">
                    <div className="menu-item-name">
                        Sport
                    </div>
                    <Link to="/edit" className="menu-item-edit-btn">
                        <FontAwesomeIcon icon="pencil-alt" />
                    </Link>
                </li>
                <li className="menu-item">
                    <div className="menu-item-name">
                        Eating
                    </div>
                    <Link to="/edit" className="menu-item-edit-btn">
                        <FontAwesomeIcon icon="pencil-alt" />
                    </Link>
                </li>
                <li className="menu-item">
                    <div className="menu-item-name">
                        Job
                    </div>
                    <Link to="/edit" className="menu-item-edit-btn">
                        <FontAwesomeIcon icon="pencil-alt" />
                    </Link>
                </li>
                <li className="menu-item">
                    <div className="menu-item-name">
                        Cooking
                    </div>
                    <Link to="/edit" className="menu-item-edit-btn">
                        <FontAwesomeIcon icon="pencil-alt" />
                    </Link>
                </li>
            </ul>
            <Modal show={isOpen} onHide={hideCreateModal}>
                <ModalHeader>
                <Modal.Title className="create-activity-name">Create Activity</Modal.Title>
                </ModalHeader>
                <CreateActivity/>
                <ModalFooter>
                    <button className="modal-cancel-btn" onClick={hideCreateModal}>Cancel</button>
                    <button className="modal-save-btn" onClick={hideCreateModal}>Save</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Menu;
