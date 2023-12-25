import axios from "axios";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      await axios
        .post("https://api3.adbacklist.com/api/users/save", profile)

        .then((response) => {
          user.id = response.data.isExist._id;
          user.credit = response.data.isExist.credit;
        });
      return true;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },
};

export default NextAuth(authOptions);
