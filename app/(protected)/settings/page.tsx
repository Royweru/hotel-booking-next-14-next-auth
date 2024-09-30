"use client"
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/user";
import React from "react";
import { signOut } from "next-auth/react";
const SettingsPage =  () => {
 const currentUser = useCurrentUser()
  
  return (
    <div>
      {JSON.stringify(currentUser)}
      <div>
            
          <Button 
          type="submit"
          onClick={()=>signOut()}
          >Sign out</Button>
        
      </div>
    </div>
  );
};

export default SettingsPage;
