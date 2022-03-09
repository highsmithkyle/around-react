import avatar from "../images/spinner-load.gif"


function Main() {
    return (

        <main>
            <section className="profile">
                <div className="profile__avatar">
                    <div className="profile__elipse">
                        <img className="profile__image" src={avatar}
                            alt="profile-image" />
                        <button className="button profile__avatar-button" type="button"></button>
                    </div>
                </div>

                <div className="profile__info">
                    <div className="profile__name-container">
                        <h1 className="profile__title">Loading...</h1>
                        <button className="profile__edit-button" type="button"></button>
                    </div>
                    <p className="profile__subtitle">Loading...</p>
                </div>
                <button className="profile__add-button" id="profile-add-button" type="button"></button>

            </section>

            <ul className="elements">
            </ul>

        </main>

    )
}

export default Main;