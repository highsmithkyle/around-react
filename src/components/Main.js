
import avatar from "../images/spinner-load.gif"
import editButton from "../images/edit-button.svg"
import addButton from "../images/add-button.svg"


function Main(props) {


    // for API -- work on later//


    // const [userName, setUserName] = useState("Pablo Picasso");
    // const [userDescription, setUserDescription] = useState("Painter");
    // const [userAvatar, setUserAvatar] = useState(profileAvatar);



    return (


        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <div className="profile__elipse">
                        <img className="profile__image" src={avatar}
                            alt="profile-image" />
                        <button className="button profile__avatar-button"
                            type="button"
                            onClick={props.onEditAvatarClick}
                            style={{ backgroundImage: `url(${editButton})` }}
                        ></button>
                    </div>
                </div>



                <div className="profile__info">
                    <div className="profile__name-container">
                        <h1 className="profile__title">{""}</h1>
                        <button className="profile__edit-button"
                            type="button"
                            style={{ backgroundImage: `url(${editButton})` }}
                            onClick={props.onEditProfileClick}

                        ></button>
                    </div>
                    <p className="profile__subtitle">{""}</p>
                </div>
                <button className="profile__add-button"
                    id="profile-add-button"
                    type="button"
                    style={{ backgroundImage: `url(${addButton})` }}
                    onClick={props.onAddPlaceClick}
                ></button>

            </section>

            <ul className="elements">
            </ul>

        </main>

    )
}

export default Main;