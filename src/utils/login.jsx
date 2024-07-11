import { signIn } from 'aws-amplify/auth';

async function login({ email, password }) {
  try {
    const { isSignedIn, nextStep } = await signIn({ username:email, password });
  } catch (error) {
    console.log('error signing in', error);
  }
}

export default login