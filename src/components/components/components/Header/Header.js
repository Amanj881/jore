/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Header = React.forwardRef(function Header(
  {  
    labelText,
    headerType,
    className = `text-black-4`,
  },
  ref
) {

  const headerClasses = classNames(
    `font-medium text-3xl tracking-tighter text-black-7 h-10 leading-10 lg:whitespace-pre`,
  );
 
  return (
    <label className={headerClasses}>
      {labelText}
    </label>
  );
});

Header.propTypes = {
  labelText: PropTypes.node.isRequired,

};

export default Header;
