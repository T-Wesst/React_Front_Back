import React from "react";
import PropTypes from "prop-types";
const Header = props => {
  const { branding } = props;
  return (
    <div>
      {/*functional componets use props.<propName>*/}
      <h1 style={headingStyle}>{branding}</h1>
    </div>
  );
};
Header.defaultProps = {
  branding: "My App"
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};
const headingStyle = {
  color: "green"
};
export default Header;
