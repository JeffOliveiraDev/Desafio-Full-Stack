import LoginForm from "@/components/loginForm";
import api from "@/services/api";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

// interface DashboardProps {
//   contacts: Contact[];
// }

export default function Home() {
  return (
    <section
      className={
        " flex min-h-screen flex-col items-center justify-center text-slate-200"
      }
    >
      <div className={"p-10 flex flex-col bg-sky-900 rounded shadow-lg  "}>
        <h2 className={"items-center flex flex-col text-3xl"}>Login</h2>
        <LoginForm />
      </div>
    </section>
  );
}
