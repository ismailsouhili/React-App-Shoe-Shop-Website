import React from 'react';

class Category extends React.Component {
    render()
    {
       return (
            <div>

                <section className="category">
                <h2>we separate by</h2>
                <h1>category</h1>
                <div className="category-container">
                <div className="category-box">
                <img src="img/men.jpg" />
                <div className="title">
                    <h3>men</h3>
                </div>
                </div>
                <div className="category-box">
                <img src="img/women.jpg" />
                <div className="title">
                    <h3>women</h3>
                </div>
                </div>
                <div className="category-box">
                <img src="img/kids.jpg" />
                <div className="title">
                    <h3>kids</h3>
                </div>
                </div>
                </div>
                </section>


            </div>
    )
    }
  
}

export default Category;
