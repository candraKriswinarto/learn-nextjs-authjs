import NextAuth from "next-auth"
import github from "next-auth/providers/github"
import google from "next-auth/providers/google"
import instagram from "next-auth/providers/instagram"
import prisma from "./prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [google, github, instagram],
  pages: {
    signIn: '/signin'
  }
})