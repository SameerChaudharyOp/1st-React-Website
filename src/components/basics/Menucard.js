import React from 'react';
import PropTypes from 'prop-types';

const Menucard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, image, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{name}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">{description}</span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-tag">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};
Menucard.propTypes = {
  menuData: PropTypes.array
};

export default Menucard;
