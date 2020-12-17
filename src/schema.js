// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("username is required")
    .min(3, "username must be 3 chars long"),
  email: yup.string()
  .email("must be an email")
  .required("email is required"),
  password: yup
    .string().required("password is required")
    .min(8, "password must be 8 chars in length"),
  termsOfService: yup
    .boolean().oneOf([true], 'Field must be checked')
});