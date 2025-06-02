import React from "react";

export const Spinner = () => (
    <div style={{ textAlign: 'center', padding: '2rem'}}>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
);