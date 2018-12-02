import React from "react";
const Header = props => {
  const { branding } = props;
  return (
    <div>
      {/*functional componets use props.<propName>*/}
      <h1>{branding}</h1>
    </div>
  );
};
export default Header;
