import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGlobalContext } from '../Context';
import CreateActivity from '../CreateActivity';
import EditActivity from '../EditActivity';

const ActivityList = (props) => {
    const {
        activityList,
        openActivityCreateForm,
        openActivityEditForm,
        setEditFormActivity,
        isEditActivityFormOpen
    } = useGlobalContext();

    const selectActivityEdit = (activity) => {
        setEditFormActivity(activity);
        openActivityEditForm();
    }

    return (
        <div className={'list ' + props.className || ''}>
            <ul className="list-group">
                <li className="list-title">
                    <div className="list-title-text">
                        My Activities List
                    </div>
                    <button onClick={ openActivityCreateForm } className="list-add-btn">
                        <FontAwesomeIcon icon="plus" />
                    </button>
                </li>
                {activityList.map((activity) => {
                    return (
                        <li key={activity.id} className="list-item">
                            <div className="list-item-name">{activity.name}</div>
                            <button
                                onClick={() => selectActivityEdit(activity)}
                                className="list-item-edit-btn"
                            >
                                <FontAwesomeIcon icon="pencil-alt" />
                            </button>
                        </li>
                    )
                })}
            </ul>
            <CreateActivity />
            {isEditActivityFormOpen && <EditActivity />}
        </div>
    );
}

export default ActivityList;
