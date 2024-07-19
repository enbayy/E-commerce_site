import { notification } from 'antd';
import { signIn } from 'aws-amplify/auth';

async function login({ email, password }) {

  try {
    const { isSignedIn } = await signIn({ username: email, password });
    console.log("email:", email, "password:", password)
    notification.success({
      message: 'Logged in',
      description: '',
      placement: 'topRight',
      duration: 3,
    });

  } catch (error) {
    console.log('error signing in', error);
    notification.error({
      message: 'Login failed',
      description: error.message,
      placement: 'topRight',
      duration: 3,
    });
  }
}

export default login