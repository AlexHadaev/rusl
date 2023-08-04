const Contacts = () => {
    return ( 
      <div>
         <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Cherkasy, Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+380951516799">+38 (095) 151-67-99</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="email:orasbaev25@gmail.com">orasbaev25@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
      </div>  
     );
}
 
export default Contacts;