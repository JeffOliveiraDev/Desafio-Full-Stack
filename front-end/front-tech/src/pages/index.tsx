import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleCadastroClick = () => {
    router.push("/cadastro");
  };

  return (
    <section
      className={
        " flex min-h-screen flex-col items-center justify-center text-slate-200"
      }
    >
      <div className={"p-10 flex flex-col bg-sky-900 rounded shadow-lg  "}>
        <h2 className={"items-center flex flex-col text-3xl"}>Login</h2>
        <form action="" method="post" className={"p-4 flex flex-col gap-2"}>
          <div className={"p-1 flex flex-col gap-2"}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className={"p-1 rounded"}
              required
            />
          </div>
          <div className={"p-1 flex flex-col gap-2"}>
            <label htmlFor="password">Senha</label>
            <input
              type="text"
              name="password"
              className={"p-1 rounded"}
              required
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
      </div>
    </section>
  );
}
