"use server";
export const handleLogin = async (userInfo) => {
  const newUserInfo = {
    email: userInfo.get(`email`),
    password: userInfo.get(`password`),
  };
  console.log("User info", newUserInfo);
  //   const res = signIn("credentials", {
  //     redirect: false,
  //     ...newUserInfo,
  //   });
  return newUserInfo;
  // console.log("Response  : ", await res.json());
};
