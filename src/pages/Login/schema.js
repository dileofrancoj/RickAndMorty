import * as yup from "yup";
export const schema = yup.object().shape({
  username: yup
    .string()
    .required("El campo es obligatorio")
    .min(5, "El minimo es 5 caracteres")
    .max(20, "El máximo es de 20 caracteres"),
  password: yup.string().required(),
});
