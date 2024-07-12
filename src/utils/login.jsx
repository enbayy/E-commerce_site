import { signIn } from 'aws-amplify/auth';
import { getRoutePath } from '../routing/routes';
import { ROUTES_ID } from '../routing/routes_id';
import { useNavigate } from 'react-router-dom';

async function login({ email, password }) {
  const navigate = useNavigate();
  try {

    const { isSignedIn, nextStep } = await signIn({ username: email, password });
    isSignedIn ? navigate(getRoutePath(ROUTES_ID.private)) : null
  } catch (error) {
    console.log('error signing in', error);
  }
}

export default login