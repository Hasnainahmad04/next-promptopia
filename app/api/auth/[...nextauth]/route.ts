import User from "@models/user";
import { ConnectToDatabase } from "@utils/database";
import Google from "next-auth/providers/google";
import NextAuth from "next-auth/next";

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.CLEINT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      try {
        await ConnectToDatabase();
        // check if a user Exist
        const userExist = await User.findOne({ email: profile?.email });

        if (!userExist) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.toLowerCase(),
            image: profile?.picture || profile?.image,
          });
        }
        return true;
      } catch (error) {
        console.log({ error }, "Signin error");
        return false;
      }
    },
    async session({ session }) {
      if (!session) return;
      const dbUser = await User.findOne({
        email: session?.user?.email,
      });

      const userId = dbUser?._id?.toString();

      return {
        ...session,
        user: {
          ...session.user,
          id: userId,
        },
      };
    },
  },
});

export { handler as GET, handler as POST };
