import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

// Make sure we have the required environment variables
if (!process.env.NEXTAUTH_SECRET) {
  console.error('Error: NEXTAUTH_SECRET is not defined');
}

// Configure NextAuth
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // Add user ID and role to JWT token
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user ID and role to session
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
    async signIn({ user, account }) {
      try {
        await connectToDatabase();
        
        // Check if user exists, if not create a new user
        const existingUser = await User.findOne({ email: user.email });
        
        if (!existingUser) {
          // Create new user entry in database
          await User.create({
            name: user.name,
            email: user.email,
            profileImage: user.image,
          });
        }
        
        return true;
      } catch (error) {
        console.error('OAuth sign in error:', error);
        return false;
      }
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};

export default NextAuth(authOptions);