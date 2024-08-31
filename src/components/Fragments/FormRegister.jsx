import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="fullname" type="text" placeholder="Enter Your Name" name="fullname" />
      <InputForm label="email" type="email" placeholder="Enter Your Email" name="email" />
      <InputForm label="password" type="password" placeholder="Enter Your Password" name="password" />
      <InputForm label="confirm password" type="password" placeholder="Confirm Your Password" name="confirmpassword" />
      <Button color="bg-green-700 w-full  text-white">Register</Button>
    </form>
  );
};

export default FormRegister;
