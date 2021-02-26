import React from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

function CreateActivity() {
    const [tags, setTags] = React.useState(["example activity"])
    return(
        <ReactTagInput
            tags={tags}
            placeholder="Type and press enter"
            maxTags={10}
            editable={true}
            readOnly={false}
            removeOnBackspace={true}
            onChange={(newTags) => setTags(newTags)}
        /* Validate if activity alreday exists*/
        />
    );
}

export default CreateActivity;
