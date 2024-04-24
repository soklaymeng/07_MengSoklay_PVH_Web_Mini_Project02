import { RegisterServices, loginService } from "@/service/auth.service";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

export const authOption = {
  providers: [
    CredentialsProvider({
      async authorize(userInfo) {
        //console.log("User info: " , userInfo);
        const newUserInfo = {
          email: userInfo.email,
          password: userInfo.password,
        };
        console.log("User info1: ", userInfo);

        ///// call login service
        const login = await loginService(newUserInfo);
        console.log("login: ", login);
        if (login.status === 400) {
          redirect("/register");
        }
        return login;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};
const handler = nextAuth(authOption);
export { handler as GET, handler as POST };
