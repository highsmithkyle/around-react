import React from "react";

import trashIcon from "../images/vector-trash.png"
import heartIcon from "../images/heart.svg"
import { CurrentUserContext } from "../contexts/CurrentUserContext";



function Card({ card, onCardClick, onCardLike }) {

    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = `elements__delete ${isOwn ? "elements__delete_visible" : "elements__delete_hidden"
        }`;

    const isLiked = card.likes.some((item) => item._id === currentUser._id);
    const cardLikeButtonClassName = `elements__heart ${isLiked ? "elements__heart_visible" : "elements__heart_hidden"
        }`;





    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card)
    }





    return (

        <li className="elements__container">

            <button
                className={cardDeleteButtonClassName}
                type="button"
                style={{ backgroundImage: `url(${trashIcon})` }}

            />

            <img
                className="elements__image"
                src={card.link}
                alt={card.name}
                onClick={handleClick}
            />

            <div className="elements__text-container">
                <h2 className="elements__text">{card.name}</h2>
                <div className="elements__heart-container">
                    <button
                        className={cardLikeButtonClassName}
                        type="button"
                        // style={{ backgroundImage: `url(${heartIcon})` }}
                        onClick={handleLikeClick}

                    />
                    <p className="elements__text elements__heart-number">{card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;