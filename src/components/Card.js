import trashIcon from "../images/vector-trash.png"
import heartIcon from "../images/heart.svg"
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from "react";


function Card({ card, onCardClick }) {

    const currentUser = React.useContext(CurrentUserContext);





    function HandleClick() {
        onCardClick(card);
    }


    return (

        <li className="elements__container">

            <button
                className="elements__delete"
                type="button"
                style={{ backgroundImage: `url(${trashIcon})` }}
            />

            <img
                className="elements__image"
                src={card.link}
                alt={card.name}
                onClick={HandleClick}
            />

            <div className="elements__text-container">
                <h2 className="elements__text">{card.name}</h2>
                <div className="elements__heart-container">
                    <button
                        className="elements__heart"
                        type="button"
                        style={{ backgroundImage: `url(${heartIcon})` }}

                    />
                    <p className="elements__text elements__heart-number">{card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;