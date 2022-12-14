import React from 'react'
import './Button.css'

const Button = ({ children, link, ...otherProps }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="link"
      {...otherProps} 
    >

      {children}
    </a>
  );
}

export default Button