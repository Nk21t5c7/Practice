import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';

const handler = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
		}),
		Github({
			clientId: process.env.AUTH_GITHUB_ID ?? '',
			clientSecret: process.env.AUTH_GITHUB_SECRET ?? '',
		}),
	]
});
export { handler as GET, handler as POST };