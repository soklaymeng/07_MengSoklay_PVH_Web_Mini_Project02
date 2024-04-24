import requestHeader from "@/lib/requestHeader";
import { baseUrl } from "@/utils/constants";

export const getAllWorkspaces = async () => {
  const headers = await requestHeader();
  const res = await fetch(`${baseUrl}/workspaces`, {
    headers: headers,
  });
  const data = await res.json();
  return data;
};
//Insert a new workspace
export const insertWorkspaceService = async (workspaceName) => {
  const headers = await requestHeader();

  const res = await fetch(`${baseUrl}/workspaces`, {
    //Revalidation
    next: { data: { workspaceName } },
    method: "POST",
    body: JSON.stringify(workspaceName),
    headers: headers,
  });
  return res.json();
};

//Edit workspace
export const editWorkspaceService = async ({ workspaceName, workspaceId }) => {
  const headers = await requestHeader();
  // const headers = {
  //   "Content-Type": "application/json",
  //   Authorization:
  //     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJleXNwZW5nQGdtYWlsLmNvbSIsImlhdCI6MTcxMzk2OTk5NCwiZXhwIjoxNzEzOTg3OTk0fQ.yO3tN9vuINqzhDR2GZvGcIusjCiXfby20qPCK9RbzLE",
  // };

  const res = await fetch(`${baseUrl}/workspaces/${workspaceId}`, {
    //Revalidation
    next: { data: { workspaceName } },
    method: "PUT",
    body: JSON.stringify(workspaceName),
    headers: headers,
  });
  const result = await res.json();
  console.log("api response : ", result);
  return res;
};
