import { useState } from 'react';
import { auth, googleProvider } from '../../../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import './signup.css';

const SignUp = ({ setSignin }: { setSignin: (value: boolean) => void }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string>('');

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Signed in successfully with Google');
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User created successfully');
      window.location.href = '/';
    } catch (error: any) {
      console.log(error);

      if (error.code === 'auth/email-already-in-use') {
        setError('This email is already in use.');
      } else if (error.code === 'auth/weak-password') {
        setError('Password is too weak. It should be at least 6 characters long.');
      } else {
        setError('An error occurred. Please try again.');
      }
      console.error(error.message);
    }
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Register your Account</h2>
      <form onSubmit={handleCreateUser} className="signin-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <div>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="mr-2"
            />
            <label htmlFor="terms">
              I agree to the{' '}
              <a href="#">Terms and Conditions</a>
            </label>
          </div>
        </div>

        {/*  error message here */}
        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="signin-button">Register</button>
      </form>

      <div className="signup-link">
        <button onClick={() => setSignin(true)} className="link-button">
          Already have an account? Sign in
        </button>
      </div>

      <div className="divider">OR</div>

      <button onClick={signInWithGoogle} className="google-button">
        Sign up with Google
      </button>
    </div>
  );
};

export default SignUp;
