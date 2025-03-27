import React from 'react';
import './avatar.css';

const Avatar = ({ name }) => {
    const initials = name
        ?.split(" ")
        ?.map((n) => n[0])
        .join("")
        .toUpperCase();

    return (
        <div className={`avatar`}>
            {initials}
        </div>
    );
};

export default Avatar;