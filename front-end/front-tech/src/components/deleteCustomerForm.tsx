import {
  DeleteContactData,
  DeleteCustomerData,
  deleteContactSchema,
  deleteCustomerSchema,
} from "@/schemas/user.schema";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/authContext";
import { useState } from "react";

const DeleteCustomerForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { register, handleSubmit } = useForm<DeleteCustomerData>({
    resolver: zodResolver(deleteCustomerSchema),
  });

  const { deleteCustomer } = useAuth();

  const onFormSubmit = (formData: DeleteCustomerData) => {
    console.log(formData);
    deleteCustomer(formData);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        Deletar Cliente
      </button>

      {showModal && (
        <div>
          <form
            action=""
            method="post"
            className={"p-4 flex flex-col gap-2"}
            onSubmit={handleSubmit(onFormSubmit)}
          >
            <div className={"p-1 flex flex-col gap-2"}>
              <label htmlFor="email">Id do Cliente</label>

              <input
                type="text"
                className={"p-1 rounded text-black"}
                required
                {...register("id")}
              />
            </div>

            <button
              type="submit"
              className={
                "bg-red-500 text-white rounded px-5 py-2.5 text-center mr-2 mb-2 "
              }
            >
              Deletar
            </button>
          </form>
          <button
            onClick={handleCloseModal}
            className="bg-red-500 text-white rounded px-4 py-2 ml-2"
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteCustomerForm;
