import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ children, isAwsSignIn, ...otherProps }) => (
  <button
    className={`${isAwsSignIn ? 'aws-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
