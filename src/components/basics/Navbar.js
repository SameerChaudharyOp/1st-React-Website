import React from 'react';
import PropTypes from 'prop-types';
const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem, item) => {
            return (
              <button className="btn-group__item" onClick={() => filterItem(curElem)} key={item}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
Navbar.propTypes = {
  menuList: PropTypes.array,
  filterItem: PropTypes.any
};
export default Navbar;
