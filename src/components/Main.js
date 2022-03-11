import React, { useEffect, useState } from "react";
import profileAvatar from "../images/spinner-load.gif"
import editButton from "../images/edit-button.svg"
import addButton from "../images/add-button.svg"
import api from "./utils/api";
import Card from "./Card"

function Main(props) {

    const [userName, setUserName] = useState("Pablo Picasso");
    const [userDescription, setUserDescription] = useState("Painter");
    const [userAvatar, setUserAvatar] = useState(profileAvatar);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api
            .getInitialProfile()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about)
                setUserAvatar(data.avatar)
            })
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        api
            .getInitialCards()
            .then((data) => {
                setCards(data);
            })
            .catch((error) => console.error(error))
    }, []);


    return (

        <main className="content">

            <section className="profile">

                <div className="profile__avatar">
                    <div className="profile__elipse">
                        <img className="profile__image" src={userAvatar} alt="profile-image" />
                        <button className="button profile__avatar-button"
                            type="button"
                            onClick={props.onEditAvatarClick}
                            style={{ backgroundImage: `url(${editButton})` }}
                        ></button>
                    </div>
                </div>
                <div className="profile__info">
                    <div className="profile__name-container">
                        <h1 className="profile__title">{userName}</h1>
                        <button className="profile__edit-button"
                            type="button"
                            style={{ backgroundImage: `url(${editButton})` }}
                            onClick={props.onEditProfileClick}

                        ></button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="profile__add-button"
                    id="profile-add-button"
                    type="button"
                    style={{ backgroundImage: `url(${addButton})` }}
                    onClick={props.onAddPlaceClick}
                ></button>

            </section>

            <section className="elements">
                {cards.map((card) => {
                    <Card
                        key={card._id}
                        cardData={card}
                        onCardClick={props.onCardClick}
                    />
                })}

            </section>

        </main>
    )
}

export default Main;