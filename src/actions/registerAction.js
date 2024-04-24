"use server";

import { registerServices } from "@/service/auth.service";

export const registerAction = async (data) => {
  console.log("get data", data);
  const res = await registerServices(data);
  return res;
};
