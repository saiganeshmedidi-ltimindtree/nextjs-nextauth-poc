"use client";

import { User } from "@/types/user";
import { signOut } from "next-auth/react";
import Image from "next/image";

type UserInfoProps = {
  user: User;
}

export default function UserInfo({ user }: UserInfoProps) {

  console.log(user)
  const handleLogout = async () => {
    await signOut();
  }

  return(
	  <div className="rounded-lg border shadow-lg p-10">
      {user.image && <div>
        <Image className="rounded-full mb-4 block mx-auto" width={80} height={80} src={user.image!} alt="image"/>
      </div>}
      <div>
        Id : {user.id}
      </div>
      <div>
        Name : {user.name}
      </div>
      <div>
        Email : {user.email}
      </div>
      <button className="font-medium mt-2 text-blue-600 hover:underline" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
