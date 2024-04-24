import { baseUrl } from "@/utils/constants";

export const RegisterServices = async (userInfo) => {
  const res = await fetch(`${baseUrl}/auth/sign-up`, {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  console.log("Data register res", data);
  return data;
};
