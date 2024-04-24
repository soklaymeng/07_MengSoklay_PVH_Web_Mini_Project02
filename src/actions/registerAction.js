"use server";
export const handleRegister = async (userInfo) => {
  const newUserInfo = {
    email: userInfo.get(`email`),
    password: userInfo.get(`password`),
  };
  console.log("User info", newUserInfo);

  return newUserInfo;
};
