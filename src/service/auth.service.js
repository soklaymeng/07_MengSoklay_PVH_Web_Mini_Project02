import { baseUrl } from "@/utils/constants";

export const loginService = async (userInfo) => {
  const res = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  console.log("Data Login res", data);
  return data;
};
