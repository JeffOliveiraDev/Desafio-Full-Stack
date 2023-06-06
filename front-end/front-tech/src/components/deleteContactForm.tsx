import {
  DeleteContactData,
  LoginData,
  deleteContactSchema,
  loginSchema,
  userSchema,
} from "@/schemas/user.schema";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/authContext";
import { useState } from "react";

const DeleteContactForm = ({ contacToDelete }: any) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { register, handleSubmit } = useForm<DeleteContactData>({
    resolver: zodResolver(deleteContactSchema),
  });

  const { deleteContact } = useAuth();

  const onFormSubmit = (formData: DeleteContactData) => {
    deleteContact(formData);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        Deletar Contato
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
              <label htmlFor="email">Contato a ser deletado</label>
              <select className="p-1 rounded" {...register("id")} required>
                {contacToDelete.map((contact: any) => (
                  <option key={contact.id} value={contact.id}>
                    {contact.nome}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className={
                "bg-red-500 text-white rounded text-center mr-2 mb-2 p-1  "
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

export default DeleteContactForm;
