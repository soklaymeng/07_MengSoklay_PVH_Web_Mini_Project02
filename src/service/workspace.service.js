import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { baseUrl } from "@/utils/constants";
import { getServerSession } from "next-auth";

export const getAllWorkspaces = async () => {
  const session = await getServerSession(authOption);
  const token = session.user.token;
  const res = await fetch(`${baseUrl}/workspaces`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};
//Insert a new workspace
export const insertWorkspaceService = async (workspaceName) => {
  const session = await getServerSession(authOption);
  const token = session.user.token;
  const res = await fetch(`${baseUrl}/workspaces`, {
    //Revalidation
    next: { data: { workspaceName } },
    method: "POST",
    body: JSON.stringify(workspaceName),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};
