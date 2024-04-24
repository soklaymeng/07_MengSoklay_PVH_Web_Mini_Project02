import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function requestHeader() {
  const session = await getServerSession(authOption);
  const token = session.user.token;
  console.log("token : " + token);
  const header = {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  };
  return header;
}
