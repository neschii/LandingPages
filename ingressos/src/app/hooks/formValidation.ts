import { z } from "zod";

// Phone number formatting function
export const formatPhoneNumber = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 11) {
    return numbers.replace(
      /(\d{2})?(\d{4,5})?(\d{4})?/,
      (_, ddd, prefix, suffix) => {
        let result = "";
        if (ddd) result += `(${ddd}`;
        if (ddd) result += ") ";
        if (prefix) result += prefix;
        if (prefix && suffix) result += "-";
        if (suffix) result += suffix;
        return result;
      }
    );
  }
  return numbers;
};

// Form validation schema
export const formSchema = z.object({
  nome: z
    .string()
    .min(3, { message: "Nome é obrigatório." })
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, { message: "Nome deve conter apenas letras." }),
  email: z.string().email({ message: "E-mail inválido." }),
  celular: z
    .string()
    .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, { message: "Telefone inválido." }),
  birthDate: z
    .string()
    .min(1, { message: "Data de nascimento é obrigatória." })
    .refine((val) => {
      const birthDate = new Date(val);
      const age = new Date().getFullYear() - birthDate.getFullYear();
      const m = new Date().getMonth() - birthDate.getMonth();
      return age > 18 || (age === 18 && m >= 0);
    }, { message: "Você precisa ter 18 anos ou mais para acessar o site." }),
  rememberMe: z.boolean(),
});
