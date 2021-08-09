import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Style from './styles.module.css'

export const Button = ({size, color, round, light, className, children, ...props}) => {

  const sizeClass =   size === "sm" ? Style.sm : 
                      size === "md" ? Style.md :
                      size === "lg" && Style.lg

  const colorClass =  color === "success" ? Style.success :
                      color === "primary" ? Style.primary : 
                      color === "warning" ? Style.warning :
                      color === "danger" && Style.danger

  return(
      <button className={cn(sizeClass, colorClass, round && Style.round, light && Style.light, Style.button, className)} {...props}>
          {children}
      </button>
  )
}

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  round: PropTypes.bool,
  light: PropTypes.bool,
}