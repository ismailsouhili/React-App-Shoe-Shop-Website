import React from 'react';

class Offers extends React.Component {
    render()
    {
       return (
            <div>

                    <section className="offer">
                    <div className="form-contert">
                        <h1>Receive news from <a href="#" className="logo">Shoes <span>.</span></a></h1>
                        <p>Sign up and be one of the first to know about all the news and offers</p>
                        <form>
                        <input type="text" name placeholder="Enter your E-mail" id />
                        <button className="btn">Get discound</button>
                        </form>
                    </div>
                    </section>


            </div>
    )
    }
  
}

export default Offers;
