import React from 'react';
import { useSession, signIn } from 'next-auth/react';

export default function Login() {
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	if (status !== 'authenticated') {
		return (
			<div>
				<p>Not logged in</p>
				<button onClick={() => signIn('google', {}, { prompt: 'login' })} className='border rounded-2xl px-2'>
					Gmail
				</button>
				<button onClick={() => signIn('github', {}, { prompt: 'login' })} className='border rounded-2xl px-2'>
					Github
				</button>
				<button onClick={() => signIn('credentials', {}, { prompt: 'login' })} className='border rounded-2xl px-2'>
					Email
				</button>
			</div>
		);
	}
	return null;
}
