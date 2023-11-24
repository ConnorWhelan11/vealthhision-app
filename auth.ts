import NextAuth, { type DefaultSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
    } & DefaultSession['user']
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      authorize() {
        // Return a default user object
        return {
          id: 'default-user-id',
          name: 'Default User',
          email: 'default@example.com',
          image: 'default-image-url',
        };
      },
    }),
  ],
  callbacks: {
    session({ session, user }) {
      // Assign the default user ID
      if (user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  pages: {
    signIn: '/sign-in',
  },
});
