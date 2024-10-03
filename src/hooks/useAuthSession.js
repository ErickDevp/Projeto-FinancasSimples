import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'; 
import { firebaseAuth } from '../services/firebase.js';

export default function useAuthSession() {
  const [user, setUser] = useState(null);
  const [showLoading, setShowLoading] = useState(true);

 /*
  function getLoggerUser() {
    return new Promise(resolve => {
        onAuthStateChanged(firebaseAuth, (user) => {
            console.log(user);
            resolve(user)
        });
    })
  }
 */

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setShowLoading(false);
        setUser(user); 
      } else {
        setShowLoading(false);
        setUser(null); 
      }
    });

    return () => unsubscribe();
  }, []);

  return { user, showLoading };
};
