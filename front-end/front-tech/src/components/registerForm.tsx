import { useAuth } from "@/contexts/authContext";
import { UserData, userSchema } from "@/schemas/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/");
  };

  const { register, handleSubmit } = useForm<UserData>({
    resolver: zodResolver(userSchema),
  });

  const { register: registerUser } = useAuth();

  const onFormSubmit = (formData: UserData) => {
    registerUser(formData);
  };

  return (
    <form
      action=""
      method="post"
      className={"p-4 flex flex-col gap-2"}
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <div className={"p-1 flex flex-col gap-2 "}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          className={"p-1 rounded text-black"}
          required
          {...register("nome")}
        />
      </div>
      <div className={"p-1 flex flex-col gap-2"}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className={"p-1 rounded text-black "}
          required
          {...register("email")}
        />
      </div>
      <div className={"p-1 flex flex-col gap-2"}>
        <label htmlFor="telefone" placeholder="teste@mail.com">
          Telefone
        </label>
        <input
          type="text"
          className={"p-1 rounded text-black "}
          required
          placeholder="1199821221"
          {...register("telefone")}
        />
      </div>
      <div className={"p-1 flex flex-col gap-2 "}>
        <label htmlFor="registrado">Registrado</label>
        <input
          type="text"
          className={"p-1 rounded text-black "}
          placeholder="10/02/2021"
          required
          {...register("registrado")}
        />
      </div>
      <div className={"p-1 flex flex-col gap-2"}>
        <label htmlFor="password">Senha</label>
        <input
          type="text"
          className={"p-1 rounded text-black "}
          required
          placeholder="mín 8 dígitos"
          {...register("senha")}
        />
      </div>

      <div>
        <p className={"p-8"}>
          Já tem conta?{" "}
          <span
            className={"italic cursor-pointer hover:text-green-500"}
            onClick={handleLoginClick}
          >
            Logue Aqui!
          </span>
        </p>
      </div>
      <button
        type="submit"
        className={
          'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"'
        }
      >
        Cadastrar
      </button>
    </form>
  );
};

export default RegisterForm;
