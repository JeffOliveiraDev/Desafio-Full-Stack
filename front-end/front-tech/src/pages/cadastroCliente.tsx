import { useRouter } from "next/router";

const CreateClientForm = () => {
  
  return (
    <section
      className={
        " flex min-h-screen flex-col items-center justify-center text-slate-200"
      }
    >
      <div className={"p-10 flex flex-col bg-sky-900 rounded shadow-lg  "}>
        <h2 className={"items-center flex flex-col text-3xl"}>
          Cadastro de Cliente
        </h2>
        
      </div>
    </section>
  );
};

export default CreateClientForm;
