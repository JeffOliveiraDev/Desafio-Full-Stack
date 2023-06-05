import DeleteContactForm from "@/components/deleteContactForm";
import DeleteCustomerForm from "@/components/deleteCustomerForm";
import UpdateClientModal from "@/components/modalClientUpdate";
import UpdateContactModal from "@/components/modalContactUpdate";
import RegisterCustomerForm from "@/components/registerClientForm";
import RegisterContactForm from "@/components/registerContactForm";
import api from "@/services/api";
import { GetServerSideProps, NextPage } from "next";

import nookies from "nookies";

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
  return (
    <section className=" flex min-h-screen min-w-max">
      <div className="w 0.5/3 bg-gray-200 p-8 ">
        <UpdateClientModal />
        <span className="p-1"> </span>

        <UpdateContactModal />
        <span className="p-1"></span>
        <RegisterCustomerForm />
        <span className="p-1"></span>
        <RegisterContactForm />
        <span className="p-1"></span>
        <DeleteContactForm />
        <span className="p-1"></span>
        <DeleteCustomerForm />
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
              <th className="border px-4 py-2">CustomerId</th>
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
                <td className="border px-4 py-2">{contact.customerId}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-2.5/3 bg-gray-100 p-8">
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
