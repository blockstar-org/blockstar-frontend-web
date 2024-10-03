const NumberInput = ({ field, form, allowFloat = false, ...props }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const numberRegex = allowFloat ? /^[0-9]*\.?[0-9]*$/ : /^[0-9]*$/;

    if (inputValue) form.setFieldTouched(field.name, true);

    // Check if the input value is valid or empty
    if (numberRegex.test(inputValue) || inputValue === "") {
      form.setFieldValue(
        field.name,
        inputValue === "" ? "" : Number(inputValue)
      );
    } else {
      // Revert to the previous value if invalid
      form.setFieldValue(field.name, field.value);
    }
  };

  const handleBlur = () => {
    form.setFieldTouched(field.name, true);
  };

  return (
    <input
      {...field}
      {...props}
      value={field.value === "" ? "" : field.value}
      onChange={handleChange}
      onBlur={handleBlur}
      pattern={allowFloat ? "[0-9]*[.,]?[0-9]*" : "[0-9]*"}
    />
  );
};

export default NumberInput;
