import { useAuth } from "@/contexts/authContext";
import { CustomertData, customerSchema } from "@/schemas/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterCustomerForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { register, handleSubmit } = useForm<CustomertData>({
    resolver: zodResolver(customerSchema),
  });

  const { registerCustomer } = useAuth();

  const onFormSubmit = (formData: CustomertData) => {
    registerCustomer(formData);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        Cadastrar Cliente
      </button>

      {showModal && (
        <div>
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="mt-1 pt1 max-h-screen  "
          >
            <div className="mb-4">
              <label htmlFor="nome" className="block mb-1">
                Nome
              </label>
              <input
                type="text"
                className="p-1 rounded"
                {...register("nome")}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="text"
                className="p-1 rounded"
                {...register("email")}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="telefone" className="block mb-1">
                Telefone
              </label>
              <input
                type="text"
                className="p-1 rounded"
                {...register("telefone")}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="registrado" className="block mb-1">
                Registrado
              </label>
              <input
                type="text"
                className="p-1 rounded"
                placeholder="10/02/2021"
                {...register("registrado")}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-400 text-white rounded px-4 py-2"
            >
              Cadastrar
            </button>
            <button
              onClick={handleCloseModal}
              className="bg-red-500 text-white rounded px-4 py-2 ml-2"
            >
              Fechar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RegisterCustomerForm;
