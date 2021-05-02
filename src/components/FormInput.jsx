import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => {
  const {
    name, label, type, form, settings, ...inputProps
  } = props;
  const { register, formState: { errors } } = form;

  return (
    <div>
      <label htmlFor={name}>
        {label}
        :
      </label>
      <input type={type} {...register(name, settings)} {...inputProps} />
      {errors[name] && <span title="Invalid value!">⚠️</span>}
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  form: PropTypes.shape({
    formState: PropTypes.shape({
      errors: PropTypes.object.isRequired,
    }).isRequired,
    register: PropTypes.func.isRequired,
  }).isRequired,
  settings: PropTypes.object,
};

FormInput.defaultProps = {
  type: 'text',
  settings: {},
};

export default FormInput;
