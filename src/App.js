import React, { useState } from "react"
import Header from "./components/Header";
import Footer from "./components/Footer"
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";
import closeButton from "./images/close-button.svg";


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);


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

      <Header />

      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick}


      />


      <PopupWithForm

        isOpen={isEditAvatarPopupOpen}
        moldalType={"avatar"}
        modalTitle={"Edit profile picture"}
        modalButtonText={"Change"}
        closeButtons={closeButton}
        onClose={closeAllPopups}
      >
        <input
          id="link-input-avatar"
          className="modal__form modal__form_type_avatar"
          type="url"
          name="avatar"
          placeholder="Image link"
          required
        />
        <span id="link-avatar-input-error" className="modal__error"></span>
      </PopupWithForm>


      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        moldalType={"edit"}
        modalTitle={"Edit Profile"}
        modalButtonText={"Save"}
        closeButtons={closeButton}
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
          maxLength="200" />

        <span id="about-input-error" className="modal__error"></span>
      </PopupWithForm>




      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        moldalType={"add"}
        modalTitle={"New Place"}
        modalButtonText={"Create"}
        closeButtons={closeButton}
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





      <Footer />
    </div>

  )
}

export default App;









