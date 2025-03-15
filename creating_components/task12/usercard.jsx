import React from "react";
import './card.css';

function UserCard({name, age}){
    return (
        <div className="user-card">
            <img 
                src="https://via.placeholder.com/150" 
                alt={`${name}'s avatar`} 
                className="user-avatar" 
            />
            <h2 className="user-name">{name}</h2>
            <p className="user-age">Возраст: {age} лет</p>
        </div>
    );
};
export default UserCard;