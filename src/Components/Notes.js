import React from 'react';

import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Notes extends React.Component {
  state = {
    active: 1,

    notes: [
      // {
      //   id: 1,
      //   text: 'English book page 34-89'}
    ],
  };

  constructor(props) {
    super(props);

    this.state.active = props.match.params.noteId;

    this.handleChange = this.handleChange.bind(this);
  }

  getTitle = (text) => {
    let title = text.split('\n')[0];
    if (title === '') {
      return 'Empty note';
    }
    return title;
  };

  getNextId = () => this.state.notes.length + 1;

  getActiveNote = () => {
    for (let i = 0; i < this.state.notes.length; i++) {
      if (this.state.notes[i].id === this.state.active) {
        return this.state.notes[i];
      }
    }
    return null;
  };

  handleChange(event) {
    this.getActiveNote().text = event.target.value;
    this.setState({ notes: this.state.notes });
  }

  setActive(id) {
    this.props.history.push('/notes/' + id);

    this.setState({
      active: id,
    });
  }

  removeNotes() {
    const result = this.state.notes.filter(
      (note) => note.id !== this.state.active
    );

    let active = result.length > 0 ? result[0].id : null;

    this.setState({
      notes: result,
    });

    this.setActive(active);
  }

  handleCreate = () => {
    console.log('handleCreate');
    let emptyNote = {
      id: this.getNextId(),
      text: '',
    };
    let notes = this.state.notes;

    notes.unshift(emptyNote);

    this.setState({
      notes: notes,
    });
    this.setActive(emptyNote.id);
  };

  render() {
    const activeNote = this.getActiveNote();
    const showForm = activeNote !== null;

    return (
      <div className="App">
        <Container className="p-3">
          <Jumbotron>
            <h1>Write it down</h1>
            {/* <img src={bookPen} alt="Logo book and pen"></img> */}
          </Jumbotron>

          <Row noGutters>
            <Col>
              <ListGroup>
                <Button variant="outline-primary" onClick={this.handleCreate}>
                  Create note
                </Button>
                {this.state.notes.map((note) => {
                  return (
                    <ListGroup.Item
                      key={note.id}
                      active={note.id === this.state.active}
                      onClick={() => {
                        this.setActive(note.id);
                      }}
                    >
                      {this.getTitle(note.text)}
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
                    value={this.getActiveNote().text}
                    onChange={this.handleChange}
                  ></Form.Control>
                  <br />
                  <Button
                    variant="outline-danger"
                    onClick={(event) => this.removeNotes(event)}
                  >
                    Delete
                  </Button>{' '}
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
}
export default Notes;
