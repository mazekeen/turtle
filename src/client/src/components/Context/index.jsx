import React, { useState, useContext, useEffect } from 'react';
const AppContext = React.createContext();

const getLocalStorage = () => {
    const listJson = localStorage.getItem('activityList');

    if (!listJson) {
        return [];
    }

    return JSON.parse(listJson).map((item) => {
        return {...item, executedAt: new Date(item.executedAt)};
    });
}

const AppProvider = ({ children }) => {
    const [activityList, setActivityList] = useState(getLocalStorage());
    const [isActivityCreateFormOpen, setIsActivityCreateFormOpen] = useState(false);
    const [isEditActivityFormOpen, setIsEditActivityFormOpen] = useState(false);
    const [editFormActivity, setEditFormActivity] = useState(null);

    // Create Activity Modal
    const openActivityCreateForm = () => { setIsActivityCreateFormOpen(true) };
    const closeActivityCreateForm = () => { setIsActivityCreateFormOpen(false) };

    // Edit Activity Modal
    const openActivityEditForm = () => { setIsEditActivityFormOpen(true) };
    const closeActivityEditForm = () => { setIsEditActivityFormOpen(false) };

    // Activity operations
    const createActivity = (activity) => {
        setActivityList([...activityList, activity]);
    }
    const removeActivity = (activityId) => {
        setActivityList(activityList.filter((item) => item.id !== activityId));
    }
    const updateActivity = (partialActivity) => {
        const activity = activityList.find((item) => item.id === partialActivity.id);
        Object.assign(activity, partialActivity);
    }

    // Update localStorage everytime something changes in the activityList
    useEffect(() => {localStorage.setItem('activityList', JSON.stringify(activityList))});

    return (
        <AppContext.Provider
            value={{
                activityList,

                // create form state
                isActivityCreateFormOpen,
                // create form actions
                openActivityCreateForm,
                closeActivityCreateForm,

                // mutation actions
                createActivity,
                removeActivity,
                updateActivity,

                // edit form state
                isEditActivityFormOpen,
                editFormActivity,
                setEditFormActivity,
                // edit form actions
                openActivityEditForm,
                closeActivityEditForm,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
