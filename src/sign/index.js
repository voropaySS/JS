import React from "react";
import { Link } from "react-router-dom";

export function SignApplication() {
    return (
        <div>
            <Link to="/sign" activeStyle>
                подписать
            </Link>
            <h1>SignApplication page</h1>
        </div>
    )
}