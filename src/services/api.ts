export async function registration() {
  const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/auth/register');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function login() {
  const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/auth/login');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
