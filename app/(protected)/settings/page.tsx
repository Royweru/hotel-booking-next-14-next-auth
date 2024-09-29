import { auth } from "@/auth";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

const SettingsPage = async () => {
  const session = await auth();
  
  
  return (
    <div>
      {JSON.stringify(session)}
      <div>
        <form
          action={async () => {
            "use server";

            await signOut();
          }}
        >
          <Button type="submit">Sign out</Button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
