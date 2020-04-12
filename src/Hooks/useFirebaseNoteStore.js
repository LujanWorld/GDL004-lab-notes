import { useState, useEffect, useCallback } from 'react';

export default function useFirebaseNoteStore(db, userId) {
  const [notes, setNotes] = useState({
    loading: true,
    notes: {},
  });

  const createNote = useCallback(
    (note) => {
      const res = db
        .ref('/users/' + userId)
        .child('notes')
        .push(note);

      // setNotes({
      //   loading: true,
      //   notes: notes.notes,
      // });
      return res.key;
    },
    [db, userId, notes.notes]
  );

  const updateNote = useCallback(
    (key, text) => {
      db.ref('/users/' + userId + '/notes/')
        .child(key)
        .update({
          text: text,
        });
    },
    [db, userId]
  );

  const deleteNote = useCallback(
    (key) => {
      db.ref('/users/' + userId + '/notes/' + key).remove();
    },
    [db, userId]
  );

  useEffect(() => {
    const unsub = db
      .ref('/users/' + userId + '/notes')
      .orderByChild('created')
      .on('value', (snapshot) => {
        console.log('Notes changed in firebase.', snapshot);
        if (!snapshot) {
          return;
        }
        setNotes({
          loading: false,
          notes: snapshot.val() || {},
        });
      });

    // Cleanup.
    return () => {
      unsub();
    };
  }, [db, userId]);

  return [notes, createNote, updateNote, deleteNote];
}
