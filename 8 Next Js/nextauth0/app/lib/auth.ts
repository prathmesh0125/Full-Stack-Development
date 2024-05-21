import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";
export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        console.log(credentials);
        return {
          id: "user1",
          name: "pratmesh bidve",
          email: "bidve@gmail.com",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID|| " ",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || " "
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID|| "",
      clientSecret: process.env.GITHUB_SECRET||""
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ token, user }: any) => {
      console.log(token);
      if (user) {
        token.userId = user.id;
      }
      return token;
    },
    session: ({ session, token }: any) => {
      console.log(session);
      if (session && token.userId) {
        session.user.id = token.userId;
      }
      return session;
    },
  },
  // pages:{
  //   signIn:"/signin"
  // }
};
