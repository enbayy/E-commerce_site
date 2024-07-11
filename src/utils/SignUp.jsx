import { signUp } from 'aws-amplify/auth';

async function handleSignUp({ username, password, email }) {
  try {
    const { userId } = await signUp({
      username:email,
      password,
      options: {
        userAttributes: {
          email,
        },
        autoSignIn: true
      }
    });

    console.log(userId);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

export default handleSignUp;