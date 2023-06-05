import { LoginData, loginSchema, userSchema } from "@/schemas/user.schema";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/authContext";

const LoginForm = () => {
  const router = useRouter();

  const handleCadastroClick = () => {
    router.push("/cadastro");
  };

  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();

  const onFormSubmit = (formData: LoginData) => {
    login(formData);
    console.log(formData);
  };

  return (
    <form
      action=""
      method="post"
      className={"p-4 flex flex-col gap-2"}
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <div className={"p-1 flex flex-col gap-2"}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className={"p-1 rounded text-black"}
          required
          {...register("email")}
        />
      </div>
      <div className={"p-1 flex flex-col gap-2"}>
        <label htmlFor="password">Senha</label>
        <input
          type="text"
          className={"p-1 rounded text-black"}
          required
          {...register("senha")}
        />
      </div>
      <div>
        <p className={"p-8"}>
          Não tem conta?{" "}
          <span
            className={"italic cursor-pointer hover:text-green-500"}
            onClick={handleCadastroClick}
          >
            Cadastre-se!
          </span>
        </p>
      </div>
      <button
        type="submit"
        className={
          'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"'
        }
      >
        Fazer Login
      </button>
    </form>
  );
};

export default LoginForm;
