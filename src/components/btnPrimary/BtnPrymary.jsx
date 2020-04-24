import React from "react";
import "./btnPrimary.css";

function BtnPrimary (props) => {
    const = {
        onClick,
        className,
        children
    } = props

    return (
        <div>
            <button
            onClick={onClick}
            className="btn__primary"
            type="button"
            >
            {children}
            </button>
        </div>
    )
}
export default BtnPrimary
