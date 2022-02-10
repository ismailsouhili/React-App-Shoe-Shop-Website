import React from 'react';

class Footer extends React.Component {
    render()
    {
       return (
            <div>

                <div>
                <section className="footer">
                    <div className="footer-list">
                    <a href="#">
                        <h2>populars</h2>
                    </a>
                    <a href="#">shoes 1</a>
                    <a href="#">shoes 2</a>
                    <a href="#">shoes 3</a>
                    <a href="#">shoes 4</a>
                    </div>
                    <div className="footer-list">
                    <a href="#">
                        <h2>category</h2>
                    </a>
                    <a href="#">men </a>
                    <a href="#">women</a>
                    <a href="#">kids </a>
                    </div>
                    <div className="footer-list">
                    <a href="#">
                        <h2>gallery</h2>
                    </a>
                    <a href="#">mark 1</a>
                    <a href="#">mark 2</a>
                    <a href="#">mark 3</a>
                    </div>
                    <div className="footer-list">
                    <a href="#">
                        <h2>secure payment</h2>
                    </a>
                    <div className="cards">
                        <img src="img/cards/1.png" alt />
                        <img src="img/cards/2.png" alt />
                        <img src="img/cards/3.png" alt />
                        <img src="img/cards/4.png" alt />
                        <img src="img/cards/5.png" alt />
                        <img src="img/cards/6.png" alt />
                        <img src="img/cards/7.png" alt />
                        <img src="img/cards/8.png" alt />
                    </div>
                    </div>
                </section>
                <section className="footer-nd">
                    <div className="footer-icon">
                    <h1><a href="#" className="logo">shoes <span>.</span></a></h1>
                    <div className="social-icon">
                        <i className="fab fa-facebook" />
                        <i className="fab fa-instagram" />
                        <i className="fab fa-twitter" />
                    </div>
                    </div>
                    <p>creater by <span>Ismail Souhili</span> © all right reserved</p>
                </section>
                </div>

            
            </div>
    )
    }
  
}

export default Footer;
