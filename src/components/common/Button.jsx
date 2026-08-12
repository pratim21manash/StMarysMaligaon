import React from 'react'

const variantClass = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline'
}

const Button = ({ children, variant = 'primary', className = '', as: As = 'button', ...props }) => {
  return (
    <As className={`${variantClass[variant] || variantClass.primary} ${className}`} {...props}>
      {children}
    </As>
  )
}

export default Button
