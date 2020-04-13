import { useState, useEffect } from 'react';

export default function useFirebaseUser(auth) {
  const [user, setUser] = useState(() => {
    const user = auth.currentUser;
    return {
      loading: !user,
      user: user,
    };
  });

  function reset() {
    setUser({
      loading: true,
      user: undefined,
    });
  }

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      console.log('Auth changed', u);
      setUser({
        loading: false,
        user: u,
      });
    });

    return () => {
      unsub();
    };
  }, [auth]);

  return [user, reset];
}
