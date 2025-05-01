'use server';

export async function handleSignUp(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  console.log('email', email);
}
