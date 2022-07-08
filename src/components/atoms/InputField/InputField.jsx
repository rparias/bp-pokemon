import React from 'react'
import PropTypes from 'prop-types'
import { InputFieldContainer } from './InputField.styles'

const InputField = ({ value, label, name, placeholder, type, onChange, icon }) => (
  <InputFieldContainer>
    {label && <label htmlFor="input-field">{label}</label>}
    {icon && <i className="fa fa-lock"></i>}
    <input
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
  </InputFieldContainer>
)

InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.bool
}

export default InputField
