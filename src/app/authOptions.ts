import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials, req) {
        const dataBody = JSON.stringify(credentials);

        try {
          const res = await fetch(
            "https://iw-dev-eval-identity-webapp.azurewebsites.net/v1/identity/user/login",
            {
              method: "POST",
              body: dataBody,
              headers: { "Content-Type": "application/json" },
            }
          ).then((res) => res.json());

          console.log("Login", res);
          // If no error and we have user data, return it
          if (res.result) {
            const userObj = {
              name: res.result.userToken.name,
              email: res.result.userToken.email,
              image: res.result.userToken.pathImage,
              id: res.result.userToken.id,
              accessToken: res.result.accessToken,
              expiresIn: res.result.expiresIn,
            };

            return userObj;
          }
        } catch (error: any) {
          const {
            cause: { code },
          } = error;
          console.log(error);
          return null;
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET as string,
  },
  callbacks: {
    async jwt({ token, account, profile, user, session, trigger }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken as string;

      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return url;
    },
  },
  pages: {
    // error: "/login",
    signIn: "/login",
    // signOut: "/logout",
    // newUser: '' // place to redirect the user at the first login
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};
