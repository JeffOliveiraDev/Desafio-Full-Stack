import {
  ContactData,
  CustomertData,
  DeleteContactData,
  DeleteCustomerData,
  LoginData,
  UpdateContactData,
  UpdateCustomerData,
  UserData,
} from "@/schemas/user.schema";
import api from "@/services/api";
import router, { useRouter } from "next/router";
import { setCookie } from "nookies";
import { ReactNode, createContext, useContext } from "react";
import { toast } from "react-toastify";
import nookies from "nookies";

interface Props {
  children: ReactNode;
}

interface authProviderData {
  register: (registerUserData: UserData) => void;
  registerCustomer: (customerData: CustomertData) => void;
  login: (loginData: LoginData) => void;
  registerContact: (registerContactData: ContactData) => void;
  deleteContact: (deleteContact: DeleteContactData) => void;
  deleteCustomer: (deleteCustomer: DeleteCustomerData) => void;
  updateCustomer: (updateCustomerData: UpdateCustomerData) => void;
  updateContact: (updateContactData: UpdateContactData) => void;
}

const AuthContext = createContext<authProviderData>({} as authProviderData);

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter();

  const updateContact = (updateContactData: UpdateContactData) => {
    const cookies = nookies.get();
    const token = cookies["user.token"];

    api
      .patch(`/contacts/${updateContactData.id}`, updateContactData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Atualização realizada com sucesso!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          router.reload();
        }, 1000);
      })

      .catch((err) => {
        console.log(err);
        toast.error(`${err.response.data.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const updateCustomer = (updateCustomerData: UpdateCustomerData) => {
    const cookies = nookies.get();
    const token = cookies["user.token"];

    api
      .patch(`/customer/${updateCustomerData.id}`, updateCustomerData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Atualização realizada com sucesso!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          router.reload();
        }, 1000);
      })

      .catch((err) => {
        toast.error(`${err.response.data.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const registerContact = (contactData: ContactData) => {
    const cookies = nookies.get();
    const token = cookies["user.token"];

    api
      .post("/contacts", contactData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Registro realizado com sucesso!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          router.reload();
        }, 1000);
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const deleteContact = (deleteContactData: DeleteContactData) => {
    const cookies = nookies.get();
    const token = cookies["user.token"];

    api
      .delete(`/contacts/${deleteContactData.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Deleção realizada com sucesso!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          router.reload();
        }, 1000);
      })

      .catch((err) => {
        console.log(err);
        toast.error(`${err.response.data.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const registerCustomer = (customerData: CustomertData) => {
    api
      .post("/customer", customerData)
      .then((res) => {
        toast.success("Registro realizado com sucesso!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          router.reload();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.response.data.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const deleteCustomer = (deleteCustomerData: DeleteCustomerData) => {
    const cookies = nookies.get();
    const token = cookies["user.token"];

    api
      .delete(`/customer/${deleteCustomerData.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Deleção realizada com sucesso!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          router.reload();
        }, 1000);
      })

      .catch((err) => {
        console.log(err);
        toast.error(`${err.response.data.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const register = (userData: UserData) => {
    api
      .post("/users", userData)
      .then((res) => {
        toast.success("Registro realizado com sucesso!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.response.data.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const login = (loginData: LoginData) => {
    api
      .post("/login", loginData)
      .then((response) => {
        setCookie(null, "user.token", response.data.token, {
          maxAge: 60 * 60,
          path: "/dashboard",
        });
      })
      .then(() => {
        toast.success("Login realizado com sucesso!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/dashboard");

        const handleRedirect = () => {
          router.push("/");
        };
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.response.data.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        registerContact,
        registerCustomer,
        deleteContact,
        deleteCustomer,
        updateCustomer,
        updateContact,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
