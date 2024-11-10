import './form-input.styles.scss'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {/* if there are other props then shrink */}
      {label && (
        <label
          className={`${
            otherProps.value.legnth ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;
