import React from 'react';

class Offer extends React.Component {
    render()
    {
       return (
            <div>

                    <section className="offer">
                    <div className="form-contert">
                        <h1>want 20% discound ?</h1>
                        <p>Enter your best email address below and receive a coupon for 20% off your first purschase!</p>
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

export default Offer;
