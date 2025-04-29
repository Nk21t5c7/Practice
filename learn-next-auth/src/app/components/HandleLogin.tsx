'use server';

export async function handleLogin(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  console.log('email', email);
}
