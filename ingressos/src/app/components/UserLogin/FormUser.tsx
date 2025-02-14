"use client";

import {
  IconUser,
  IconMail,
  IconPhone,
  IconArrowRight,
  IconCalendar,
  IconArrowLeft,
} from "@tabler/icons-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, formatPhoneNumber } from "../../hooks/formValidation";


export default function FormUser() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: FormData) => {
     localStorage.setItem("userToken", "token_do_usuario");
  };

  const renderInput = (
    name: keyof FormData,
    icon: React.ReactNode,
    props: React.InputHTMLAttributes<HTMLInputElement>
  ) => (
    <div className="space-y-2">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          {...register(name)}
          className={`block w-full pl-10 pr-3 py-3.5 text-sm 
            border-2 border-orange-100 dark:border-neutral-800
            rounded-xl focus:outline-none focus:border-yellow-400
            bg-gray-50/50 dark:bg-neutral-900/50
            text-gray-600 dark:text-neutral-300
            placeholder-gray-400 dark:placeholder-neutral-500
            transition-colors duration-200
            ${errors[name] ? "border-red-400" : ""}`}
          aria-label={name}
          {...props}
        />
      </div>
      {errors[name] && (
        <p className="pl-4 text-sm text-red-400">{errors[name]?.message}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
      <div className="max-w-md w-full relative z-10">
        <div className="dark:bg-dark-bg backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)] space-y-5">
          <h2 className="text-3xl font-bold text-gray-600 dark:text-neutral-400 bg-clip-text text-center">
            Seja bem vindo!
          </h2>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Entre na sua conta e aproveite o evento.
          </p>

          <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
            {renderInput(
              "nome",
              <IconUser className="h-5 w-5 text-gray-400" />,
              {
                placeholder: "Nome",
              }
            )}

            {renderInput(
              "email",
              <IconMail className="h-5 w-5 text-gray-400" />,
              {
                type: "email",
                placeholder: "E-mail",
              }
            )}

            {renderInput(
              "celular",
              <IconPhone className="h-5 w-5 text-gray-400" />,
              {
                type: "tel",
                placeholder: "(00) 0000-0000",
                maxLength: 14,
                onChange: (e) => setValue("celular", formatPhoneNumber(e.target.value)),
              }
            )}

            {renderInput(
              "birthDate",
              <IconCalendar className="h-5 w-5 text-gray-400" />,
              {
                type: "date",
              }
            )}

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    {...register("rememberMe")}
                    className="peer sr-only"
                    aria-label="Lembrar de mim"
                  />
                  <div className="h-4 w-4 border-2 border-gray-500/70 rounded transition-colors peer-checked:border-sky-400 peer-checked:bg-sky-400" />
                  <IconArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 text-white opacity-0 transition-opacity peer-checked:opacity-100" />
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors peer-checked:text-sky-400">
                  Lembrar de mim
                </span>
              </label>

              <a
                href="/recover-password"
                className="text-sm text-yellow-600 hover:text-yellow-500 transition-colors"
                aria-label="Esqueceu a senha?"
              >
                Esqueceu a senha?
              </a>
            </div>

            <div className="flex justify-between w-full py-5 px-22 space-x-4">
              <Link href="/" className="w-full flex items-center justify-end">
                <button
                  type="button"
                  className="w-full flex items-center justify-center py-3.5 px-4 space-x-2 rounded-xl 
                    text-sm font-medium text-black dark:bg-neutral-700
                  group"
                  aria-label="Voltar para a página inicial"
                >
                  <IconArrowLeft className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span>Voltar</span>
                </button>
              </Link>

              <Link
                href="/ingressos"
                className="w-full flex items-center justify-start"
              >
                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-3.5 px-4 space-x-2 rounded-xl 
                       text-sm font-medium text-black btn-gradient-yellow"
                  disabled={!isValid}
                  aria-label="Acessar a conta"
                >
                  <span>Acessar</span>
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
