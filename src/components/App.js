import React, { useEffect, useState } from "react"
import Header from "./Header";
import Footer from "./Footer"
import Main from "./Main";
import ImagePopup from "./ImagePopup"
import PopupWithForm from "./PopupWithForm";
import closeButton from "../images/close-button.svg";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function App() {


  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = useState({});
  // const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getProfile()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.error(error));
  }, []);


  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }


  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />

        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          modalType={"avatar"}
          modalTitle={"Edit profile picture"}
          modalButtonText={"Change"}
          closeButton={closeButton}
          onClose={closeAllPopups}
        >
          <input
            id="link-avatar-input"
            className="modal__info modal__info_place_url-input"
            type="url"
            name="avatar"
            placeholder="Image link"
            required
          />
          <span id="link-avatar-input-error" className="modal__error"></span>
        </PopupWithForm>


        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          modalType={"edit"}
          modalTitle={"Edit Profile"}
          modalButtonText={"Save"}
          closeButton={closeButton}
          onClose={closeAllPopups}
        >
          <input
            className="modal__info modal__info_place_name-input"
            type="text"
            name="name"
            placeholder="Jacques Cousteau"
            required
            minLength="2"
            maxLength="40"
          />
          <span id="name-input-error" className="modal__error"></span>

          <input id="about-input"
            className="modal__info modal__info_place_about-me-input"
            type="text"
            name="about"
            placeholder="Explorer"
            required
            minLength="2"
            maxLength="200"
          />
          <span id="about-input-error" className="modal__error"></span>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          modalType={"add"}
          modalTitle={"New Place"}
          modalButtonText={"Create"}
          closeButton={closeButton}
          onClose={closeAllPopups}
        >

          <input id="add-card-title"
            className="modal__info modal__info_place_new-title-input"
            type="text"
            name="name"
            placeholder="Title"
            required minLength="1"
            maxLength="30"
          />
          <span id="add-card-title-error" className="modal__error"></span>

          <input id="add-card-url"
            className="modal__info modal__info_place_url-input"
            type="url"
            name="link"
            placeholder="Image Link"
            required
          />
          <span id="add-card-url-error" className="modal__error"></span>

        </PopupWithForm>

        <PopupWithForm
          modalType={"delete"}
          modalTitle={"Are you sure?"}
          modalButtonText={"Yes"}
          closeButton={closeButton}
        />

        <ImagePopup
          closeButton={closeButton}
          selectedCard={selectedCard}
          onClose={closeAllPopups}
        />

        <Footer />
      </CurrentUserContext.Provider>
    </div>

  )
}

export default App;









