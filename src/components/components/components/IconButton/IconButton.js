/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {ButtonTypes} from '../Button/Types';


const IconButton = React.forwardRef(function Button(
  { type, labelText, kind, onClick },
  ref
) {

  const IconbuttonClasses = classNames(" w-full px-4 flex items-center rounded font-medium leading-6 font-medium ", {
    [`border border-blue-100 text-blue-100 h-10 text-base`]:kind==="tertiary",
    [`bg-blue-100 text-white-100 h-10 text-base`]:kind==="primary",
  });

  return (
    <button type="button" className={IconbuttonClasses} onClick={onClick}>
      {type}
      {labelText}
    </button>

  );
});

IconButton.propTypes = {
  type: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  labelText: PropTypes.node.isRequired,
  kind: ButtonTypes.buttonKind.isRequired,

};

IconButton.defaultProps = {
  kind:'primary'
 
 
};

export default IconButton;
