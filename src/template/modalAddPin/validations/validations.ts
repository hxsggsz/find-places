import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



const Schema = yup.object({
  Nome: yup
    .string()
    .required("Por favor preencha o campo!")
    .max(20, "Excedido tamanho máximo 20 caracteres"),

  Image: yup.string(),

  Latitude: yup.number().required("Por favor preencha o campo!"),

  Longitude: yup.number().required("Por favor preencha o campo!"),

  Descrição: yup
    .string()
    .min(5, "por favor ensira uma descrição maior")
    .max(300, "Obrigado pela descrição mas acho que está muito grande!"),
});

export const ValidationResolvers = yupResolver(Schema);
