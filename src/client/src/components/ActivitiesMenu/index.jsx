import React from 'react';
import './style.scss';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import ActivityCard from '../ActivityCard';
import randomColor from '../../helpers/randomColor';
import { ACTIVITIES, COLORS } from '../../constants';

function ActivitiesMenu() {
    return (
        <ScrollMenu
            menuClass="activities-menu"
            innerWrapperClass="activities-menu-inner"
            wrapperClass="activities-menu-wrapper"
            itemClass="activities-menu-item"
            arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
            arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
            alignCenter={false}
            data={
                ACTIVITIES.map((card, index) => {
                    return (
                        <ActivityCard
                            key={index}
                            style={{ margin: 10, width: 284 }}
                            text={card.text}
                            color={card.color || randomColor(COLORS)}
                        />
                    )
                })
            }
        />
    );
}

export default ActivitiesMenu;
