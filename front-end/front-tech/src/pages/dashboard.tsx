import DeleteContactForm from "@/components/deleteContactForm";
import DeleteCustomerForm from "@/components/deleteCustomerForm";
import UpdateClientModal from "@/components/modalClientUpdate";
import UpdateContactModal from "@/components/modalContactUpdate";
import RegisterCustomerForm from "@/components/registerClientForm";
import RegisterContactForm from "@/components/registerContactForm";
import { useAuth } from "@/contexts/authContext";
import api from "@/services/api";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import nookies, { destroyCookie } from "nookies";
import { useState } from "react";

interface Contact {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  registrado: string;
  customerId: string;
}

interface Customer {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  registrado: string;
}

interface DashboardProps {
  contactsList: Contact[];
  customersList: Customer[];
}

const Dashboard: NextPage<DashboardProps> = ({
  contactsList,
  customersList,
}) => {
  const [contacts, SetContacts] = useState(contactsList);
  const [customer, SetCustomer] = useState(customersList);

  const getCustomerName = (customerId: string) => {
    const customer = customersList.filter(
      (element) => element.id === customerId
    );
    return customer.length > 0 ? customer[0].nome : "";
  };

  const router = useRouter();

  const handleLogout = async () => {
    destroyCookie(null, "user.token");

    router.push("/");
  };

  return (
    <section className=" flex min-h-screen min-w-max">
      <div className="w 0.5/3 bg-gray-200 p-8 ">
        <UpdateClientModal customerToUpdate={customer} />
        <span className="p-1"> </span>

        <UpdateContactModal contactsToUpdate={contacts} />
        <span className="p-1"></span>
        <RegisterCustomerForm />
        <span className="p-1"></span>
        <RegisterContactForm customerList={customer} />
        <span className="p-1"></span>
        <DeleteContactForm contacToDelete={contacts} />
        <span className="p-1"></span>
        <DeleteCustomerForm customerListToDelete={customer} />
      </div>

      <div className="w-2.5/3 bg-gray-100 p-8">
        <h2 className="text-3xl">Lista de Contatos</h2>
        <table className="w-full mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Telefone</th>
              <th className="border px-4 py-2">Registrado</th>
              <th className="border px-4 py-2">Cliente</th>
            </tr>
          </thead>
          <tbody>
            {contactsList.map((contact) => (
              <tr key={contact.id}>
                <td className="border px-4= py-2">{contact.id}</td>
                <td className="border px-4 py-2">{contact.nome}</td>
                <td className="border px-4 py-2">{contact.email}</td>
                <td className="border px-4 py-2">{contact.telefone}</td>
                <td className="border px-4 py-2">{contact.registrado}</td>
                <td className="border px-4 py-2">
                  {getCustomerName(contact.customerId)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-8 bg-gray-100">
          <h2 className="text-3xl">Lista de Clientes</h2>
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th className="border px-3 py-2">ID</th>
                <th className="border px-4 py-2">Nome</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Telefone</th>
                <th className="border px-4 py-2">Registrado</th>
              </tr>
            </thead>
            <tbody>
              {customersList.map((customer) => (
                <tr key={customer.id}>
                  <td className="border px-4 py-2">{customer.id}</td>
                  <td className="border px-4 py-2">{customer.nome}</td>
                  <td className="border px-4 py-2">{customer.email}</td>
                  <td className="border px-4 py-2">{customer.telefone}</td>
                  <td className="border px-4 py-2">{customer.registrado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="fixed bottom-4 left-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white rounded px-2 py-1"
        >
          Voltar Para o Login
        </button>
      </div>
    </section>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await api.get<Contact[]>("/contacts");
  const cookies = nookies.get(ctx);

  const customersResponse = await api.get<Customer[]>("/customer", {
    headers: {
      Authorization: `Bearer ${cookies["user.token"]}`,
    },
  });

  return {
    props: {
      contactsList: response.data,
      customersList: customersResponse.data,
    },
  };
};
