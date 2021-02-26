import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

const COLORS = {
    yellow: "rgba(241, 230, 74, 0.3)",
    purple: "rgba(148, 82, 203, 0.18)",
    orange: "rgba(224, 180, 76, 0.4)",
    red: "rgba(247, 83, 86, 0.2)",
    green: "rgba(76, 224, 113, 0.3)",
    default: "white",
};

function ActivityCard(props) {
    return (
        <div
            className={'activity-card '+ (props.className || '') }
            style={{
                ...(props.style || {}),
                backgroundColor: COLORS[props.color || 'default'],
            }}
        >
            <div className="activity-card-text">
                <span>{ props.text }</span>
            </div>
            <div className="activity-card-button">
                <FontAwesomeIcon icon="plus" />
            </div>
        </div>
    );
}

export default ActivityCard;

