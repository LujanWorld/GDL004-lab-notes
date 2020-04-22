import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useDebounceCallback from '../Hooks/useDebounceCallback';
import useFirebaseUser from './../Hooks/useFirebaseUser';
import useFirebaseNoteStore from './../Hooks/useFirebaseNoteStore';
import fire from '../firebaseConfig';
import { useHistory } from 'react-router';

export default function Notes(props) {
  const history = useHistory();
  const [active, setActive] = useState(props.match.params.noteId);
  const [userData] = useFirebaseUser(fire.auth);
  const [noteData, createNote, updateNote, deleteNote] = useFirebaseNoteStore(
    fire.db,
    userData.user.uid
  );
  const [text, setText] = useState();

  const [updateNoteDebounced, cancelUpdate] = useDebounceCallback(
    updateNote,
    2000
  );

  function getTitle(text) {
    let title = text.split('\n')[0];
    if (title === '') {
      return 'Empty note';
    }
    return title;
  }

  function handleSwitch(key) {
    history.push('/notes/' + key);
    setActive(key);
    setText(noteData.notes[key].text);
  }

  function handleChange(e) {
    const val = e.target.value;
    setText(val);
    updateNoteDebounced(active, val);
  }
  function handleRemove() {
    cancelUpdate();
    deleteNote(active);
  }

  function handleCreate(e) {
    console.log('handleCreate');
    let emptyNote = {
      text: '',
      created: fire.TIMESTAMP,
    };

    const key = createNote(emptyNote);
    setActive(key);
  }

  useEffect(() => {
    console.log('Updating active');
    setText(noteData.notes[active]?.text);
  }, [noteData.notes[active]]);

  const showForm = noteData.notes[active];
  if (noteData.loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="App">
      <Container className="p-3">
        <Jumbotron>
          <h1>Write it down</h1>
        </Jumbotron>
        <Row noGutters>
          <Col>
            <ListGroup>
              <Button variant="outline-primary" onClick={handleCreate}>
                Create note
              </Button>
              {Object.entries(noteData.notes)
                .reverse()
                .map(([key, note]) => {
                  return (
                    <ListGroup.Item
                      key={key}
                      active={key === active}
                      onClick={() => {
                        handleSwitch(key);
                      }}
                    >
                      {getTitle(note.text)}
                    </ListGroup.Item>
                  );
                })}
            </ListGroup>
          </Col>
          <Col xs={8}>
            {showForm ? (
              <Form>
                <Form.Control
                  as="textarea"
                  value={text}
                  onChange={handleChange}
                ></Form.Control>
                <br />
                <Button variant="outline-danger" onClick={handleRemove}>
                  Delete
                </Button>
              </Form>
            ) : (
              <center>
                <h3> Welcome, create a new note!</h3>
              </center>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
