import RegisterForm from "@/components/registerForm";

const CreateCustomerForm = () => {
  return (
    <section
      className={
        " flex min-h-screen flex-col items-center justify-center text-slate-200"
      }
    >
      <div className={"p-10 flex flex-col bg-sky-900 rounded shadow-lg  "}>
        <h2 className={"items-center flex flex-col text-3xl"}>Cadastro</h2>
        <RegisterForm />
      </div>
    </section>
  );
};

export default CreateCustomerForm;
