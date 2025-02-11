import React from 'react'

function Input({ handleChange, value, title, name }) {
    return (
        <div className="filterSteps">
            <label>
                <input type="radio" onChange={handleChange} value={value} name={name} />
                <span className="checkMark"></span>{title}
            </label>
        </div>
    )
}

export default Input