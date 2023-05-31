import { useState } from "react";

interface Contact {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  registrado: string;
}

const Dashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [registrado, setRegistrado] = useState("");

  const handleCadastroSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newContact = {
      id: contacts.length + 1,
      nome,
      telefone,
      email,
      registrado,
    };

    const contatinho = { nome: "jonas" };

    setContacts([...contacts, newContact]);
    setContacts([...contacts, contatinho]);

    setNome("teste");
    setTelefone("123");
    setEmail("");
    setRegistrado("");
  };

  return (
    <section className="flex min-h-screen">
      <div className="w-1/2 bg-gray-200 p-8 ">
        <h2 className="text-3xl">Cadastro de Contato</h2>
        <form onSubmit={handleCadastroSubmit} className="mt-4 min-h-screen ">
          <div className="mb-4">
            <label htmlFor="nome" className="block mb-1">
              Nome
            </label>
            <input
              type="text"
              name="nome"
              className="p-1 rounded"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="p-1 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefone" className="block mb-1">
              Telefone
            </label>
            <input
              type="text"
              name="telefone"
              className="p-1 rounded"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="registrado" className="block mb-1">
              Registrado
            </label>
            <input
              type="text"
              name="registrado"
              className="p-1 rounded"
              placeholder="10/02/2021"
              value={registrado}
              onChange={(e) => setRegistrado(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2"
          >
            Cadastrar
          </button>
        </form>
      </div>
      <div className="w-1/2 bg-gray-100 p-8">
        <h2 className="text-3xl">Lista de Contatos</h2>
        <table className="w-full mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Telefone</th>
              <th className="border px-4 py-2">Registrado</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td className="border px-4 py-2">{contact.id}</td>
                <td className="border px-4 py-2">{contact.nome}</td>
                <td className="border px-4 py-2">{contact.email}</td>
                <td className="border px-4 py-2">{contact.telefone}</td>
                <td className="border px-4 py-2">{contact.registrado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
