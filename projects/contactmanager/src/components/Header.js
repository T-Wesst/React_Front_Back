import React from "react";
const Header = props => {
  return (
    <div>
      {/*functional componets use props.<propName>*/}
      <h1>{props.branding}</h1>
    </div>
  );
};
export default Header;
