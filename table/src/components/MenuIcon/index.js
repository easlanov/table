import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "./menuIcon.css";

const MenuIcon = ({ inverted, visibility }) => (
  <span
    className={classnames("menu-icon", {
      "menu-icon_visibility": visibility,
      "menu-icon_inverted": inverted
    })}
  />
);

MenuIcon.propTypes = {
  inverted: PropTypes.bool,
  visibility: PropTypes.bool
};

export default MenuIcon;
