import trashIcon from "../images/vector-trash.png"
import heartIcon from "../images/heart.svg"
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function Card({ cardData, onCardClick }) {

    const user = React.useContext(CurrentUserContext);
    const isOwn = card.owner_id === user._id;







    function HandleClick() {
        onCardClick({ cardData });
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
                src={cardData.link}
                alt={cardData.name}
                onClick={HandleClick}
            />

            <div className="elements__text-container">
                <h2 className="elements__text">{cardData.name}</h2>
                <div className="elements__heart-container">
                    <button
                        className="elements__heart"
                        type="button"
                        style={{ backgroundImage: `url(${heartIcon})` }}

                    />
                    <p className="elements__text elements__heart-number">{cardData.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;