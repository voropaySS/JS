import React from "react";
import { Link } from 'react-router-dom'

export function Creature() {
    return (
        <div>
            <Link to='/creature' activeStyle></Link>
            <h1>Creature page</h1>
        </div>

    )
}