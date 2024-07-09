import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from './firebase';
import SignupPage from './pages/Signup';
import SigninPage from './pages/Signin';
import './App.css';
import { useEffect, useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log('You are logged out');
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="App">
        <SignupPage/>
        <SigninPage/>
      </div>
    );

  }

  // const signupUser = () => {
  //   createUserWithEmailAndPassword(
  //     auth, 
  //     'maitrid13@gmail.com',
  //     'maitri@098'
  //   ).then((value) => console.log(value));

  };


export default App;
