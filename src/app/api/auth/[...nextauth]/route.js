import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import { compare } from "bcrypt"
import NextAuth from "next-auth/next"


const prisma = new PrismaClient();

export const authoptions = {

   session: {
      strategy: "jwt",
   },

   providers: [

      CredentialsProvider({
         name: "Credentials",
         credentials: {
            email: { label: "email", type: "email" },
            password: { label: "password", type: "password" }
         },

         async authorize(credentials) {
            if (!credentials.email || !credentials.password) {
               throw new Error("Provide credentials")
            }

            const user = await prisma.user.findUnique({
               where: {
                  email: credentials.email,
               }
            });

            if (!user) {
               return null;
            }

            const isPasswordValid = await compare(credentials.password, user.password);

            if (!isPasswordValid) {
               throw new Error("Invalid credentials")
            }

            return {
               id: user.id,
               email: user.email,
               name: user.name,
               role: user.role
            }
         }
      }),
   ],


   debug: process.env.NODE_ENV !== "development",

   jwt: {
      secret: process.env.NEXTAUTH_JWT_SECRET,
   },

   secret: process.env.NEXTAUTH_SECRET,

   callbacks: {
      async jwt({ token, user }) {
         if (user)
            return {
               ...token,
               id: user.id,
               name: user.name,
               email: user.email,
               role: user.role
            }
         return token
      },
      async session({ session, token }) {
         return {
            ...session,
            id: token.id,
            email: token.email,
            name: token.name,
            role: token.role,
         }
      }
   }
}

const handler = NextAuth(authoptions);

export {handler as POST, handler as GET}