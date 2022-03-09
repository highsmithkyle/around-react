import React, { useState } from "react"

import Header from "./components/Header";
import Footer from "./components/Footer"
import Main from "./components/Main";


function App() {







  return (

    <div>

      <body>


        <Header />

        <Main

        />

        <Footer />






        <template id="elements-template">
          <li className="elements__container">
            <img className="elements__image" src="/images/kirill-pershin-1088404-unsplash-1.png" />
            <div className="elements__delete"></div>
            <div className="elements__text-container">
              <h2 className="elements__text"></h2>
              <div className="elements__heart-container">
                <button className="elements__heart" type="button"></button>
                <p className="elements__text elements__heart-number">0</p>
              </div>
            </div>
          </li>
        </template>



        <div className="modal modal_delete">
          <div className="modal__box modal__box_type_delete">
            <form className="modal__form modal__form_type_delete" name="edit-form-delete">
              <button className="modal__close-button modal__close-button_type_delete" id="modal-close-button-delete"
                type="button"></button>
              <h2 className="modal__title modal__title_type_delete">Are you sure?</h2>
              <button className="button modal__save-button modal__save-button_type_delete" id="delete-modal-save-button"
                type="submit">Yes</button>
            </form>
          </div>
        </div>

        <div className="modal modal_avatar">
          <div className="modal__box">
            <form className="modal__form modal__form_type_avatar" name="edit-form-avatar">
              <button className="modal__close-button modal__close-button_type_avatar" id="modal-close-button"
                type="button"></button>
              <h2 className="modal__title">Change profile picture</h2>
              <input id="link-avatar-input" className="modal__info modal__info_place_url-input" type="url" name="avatar"
                placeholder="Image Link" required />
              <span id="link-avatar-input-error" className="modal__error"></span>
              <button className="button modal__save-button modal__save-button_type_avatar" id="avatar-modal-save-button"
                type="submit">Save</button>
            </form>
          </div>
        </div>



        <div className="modal modal_profile">
          <div className="modal__box">
            <form className="modal__form modal__form_type_edit-form" name="edit-form-profile">
              <button className="modal__close-button modal__close-button_type_profile" id="modal-close-button-profile"
                type="button"></button>
              <h2 className="modal__title">Edit profile</h2>
              <input id="name-input" className="modal__info modal__info_place_name-input" type="text" name="name"
                placeholder="Jacques Cousteau" required minLength="2" maxLength="40" />
              <span id="name-input-error" className="modal__error"></span>
              <input id="about-input" className="modal__info modal__info_place_about-me-input" type="text" name="about"
                placeholder="Explorer" required minLength="2" maxLength="200" />
              <span id="about-input-error" className="modal__error"></span>
              <button className="button modal__save-button" id="profile-modal-save-button" type="submit">Save</button>
            </form>
          </div>
        </div>

        <div className="modal modal_add-card">
          <div className="modal__box">
            <form className="modal__form modal__form_type_new-place" name="edit-form-add">
              <button className="modal__close-button modal__close-button_type_new-place" id="modal-close-button-new-place"
                type="button"></button>
              <h2 className="modal__title">New Place</h2>
              <input id="add-card-title" className="modal__info modal__info_place_new-title-input" type="text" name="name"
                placeholder="Title" required minLength="1" maxLength="30" />
              <span id="add-card-title-error" className="modal__error"></span>
              <input id="add-card-url" className="modal__info modal__info_place_url-input" type="url" name="link"
                placeholder="Image Link" required />
              <span id="add-card-url-error" className="modal__error"></span>
              <button className="button modal__save-button modal__save-button_type_new-place modal__save-button_disabled"
                id="add-modal-save-button" type="submit">Create</button>
            </form>
          </div>
        </div>

        <div className="modal modal_type_image-expand">
          <div className="modal__box modal__box_type_image-expand">
            <button className="modal__close-button modal__close-button_place_image-expand"
              id="modal-close-button-image-expand" type="button"></button>
            <img className="modal__image-preview" src="#" alt="#" />
            <div className="modal__image-subtitle"></div>
          </div>
        </div>






      </body>



    </div>


  )
}

export default App;




