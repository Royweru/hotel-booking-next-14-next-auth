import { auth } from "@/auth";
import App from "next/app";

const AdminPage = async () => {
  const session = await auth();

  if (!session?.user.id) return null;
  
  return <App />;
};

export default AdminPage;
