import { useState } from 'react';
import { auth, googleProvider } from '../../../config/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import './signin.css';

const SignIn = ({ setSignin }: { setSignin: (value: boolean) => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Signed in successfully');
      window.location.href = '/';
    } catch (error) {
      console.error(error);
      alert('Invalid email or password');
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Signed in successfully with Google');
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Sign In</h2>
      <form onSubmit={handleSignIn} className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>

      <div className="signup-link">
        <button onClick={() => setSignin(false)} className="link-button">
          Don't have an account? Sign up
        </button>
      </div>

      <div className="divider">or</div>

      <button onClick={signInWithGoogle} className="google-button">
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
