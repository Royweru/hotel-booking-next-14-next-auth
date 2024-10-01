import { App } from "./app";
import { serverUser } from "@/lib/serveruser";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const user = await serverUser()
  if(!user) return redirect ("/")

  return <App />;
};

export default AdminPage;
