import { useAuth } from "@/contexts/authContext";
import {
  UpdateCustomerData,
  updateCustomerSchema,
} from "@/schemas/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

const UpdateClientModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { register, handleSubmit } = useForm<UpdateCustomerData>({
    resolver: zodResolver(updateCustomerSchema),
  });

  const { updateCustomer } = useAuth();

  const onFormSubmit = (formData: UpdateCustomerData) => {
    console.log(formData);
    updateCustomer(formData);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        Atualizar Cliente
      </button>

      {showModal && (
        <div>
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="mt-1 pt1 max-h-screen  "
          >
            <div className="mb-4">
              <label htmlFor="id" className="block mb-1">
                Id
              </label>
              <input
                type="text"
                className="p-1 rounded"
                {...register("id")}
                required
              />
              <label htmlFor="nome" className="block mb-1">
                Nome
              </label>
              <input
                type="text"
                className="p-1 rounded"
                {...register("nome")}
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
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2"
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

export default UpdateClientModal;
