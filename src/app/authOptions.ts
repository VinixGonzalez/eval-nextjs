import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const enum ErrorStatusEnum {
  Ok = "Ok",
  Erro = "Erro",
  BadRequest = "400",
}

export const enum ErrorStatusCodesEnum {
  UserBlockedManyLoginTries = "ME0009",
  UserNotFoundByEmail = "ME0012",
  WrongCredentials = "ME0008",
  MinCharPassword = "ME0011",
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials, req) {
        const dataBody = JSON.stringify(credentials);

        try {
          const res = await fetch(
            "https://iw-dev-eval-identity-webapp.azurewebsites.net/v1/identity/login",
            {
              method: "POST",
              body: dataBody,
              headers: { "Content-Type": "application/json" },
            }
          ).then((res) => res.json());

          console.log(res);
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
          } else {
            // if (res.statusCode === "400") {
            //   throw new Error(res.alerts[0].message.messageDescription, {
            //     cause: { code: res.alerts[0].code },
            //   });
            // }

            if (
              res?.statusCode === ErrorStatusEnum.Erro ||
              res?.statusCode === ErrorStatusEnum.BadRequest ||
              res?.status === 400
            ) {
              return res;
            }

            return null;
          }
        } catch (error: any) {
          const {
            cause: { code },
          } = error;
          console.log(error);
          throw new Error(code);
        }

        // Return null if user data could not be retrieved
        // return null;
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
      // session.accessToken = token.accessToken
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      if (
        (user?.statusCode === ErrorStatusEnum.Erro ||
          user?.statusCode === ErrorStatusEnum.BadRequest) &&
        user.alerts
      ) {
        if (
          user.alerts[0].code === ErrorStatusCodesEnum.UserBlockedManyLoginTries
        ) {
          return `/login?error=${ErrorStatusCodesEnum.UserBlockedManyLoginTries}`;
        }

        if (user.alerts[0].code === ErrorStatusCodesEnum.UserNotFoundByEmail) {
          return `/login?error=${ErrorStatusCodesEnum.UserNotFoundByEmail}`;
        }

        if (user.alerts[0].code === ErrorStatusCodesEnum.WrongCredentials) {
          return `/login?error=${ErrorStatusCodesEnum.WrongCredentials}`;
        }
      }

      if (user?.status === 400) {
        return `/login?error=${ErrorStatusCodesEnum.MinCharPassword}`;
      }

      return true;
    },
    async redirect({ url, baseUrl }) {
      return url;
    },
  },
  pages: {
    error: "/login",
    signIn: "/",
    // signOut: "/logout",
    // newUser: '' // place to redirect the user at the first login
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};
