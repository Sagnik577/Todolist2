import React from "react";

function InputArea(props) {
    const [inputText, setInputText] = React.useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function submitList(event) {
        props.onClick(inputText);
        setInputText("");
        event.preventDefault();
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText} />
            <button onClick={submitList}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;
