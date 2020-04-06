import { useState, useEffect } from 'react';

export default function useFirebaseUser(auth) {
  const [user, setUser] = useState(() => {
    const user = auth.currentUser;
    return {
      loading: !user,
      user: user,
    };
  });

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      console.log('Auth changed', u);
      setUser({
        loading: false,
        user: u,
      });
    });

    // Cleanup.
    return () => {
      unsub();
    };
  }, [auth]);

  return user;
}
