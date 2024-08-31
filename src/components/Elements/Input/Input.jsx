import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return <input type={type} className="text-sm border rounded py-2 px-3 w-full placeholder:opacity-40" placeholder={placeholder} name={name} id={name} ref={ref} />;
});

export default Input;
