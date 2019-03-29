import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  return <Component {...rest} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired
};

export default PrivateRoute;
