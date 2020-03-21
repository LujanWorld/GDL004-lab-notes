import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/*
 - The text-area should show text of the active note.
 get empty note as a text
*/

class App extends React.Component {
  state = {
    active: 1,

    notes: [
      {
        id: 1,
        text: 'English book page 34-89'
      },
      {
        id: 2,
        text: 'Sustainability is the way\nthe planet heart is healing'
      },
      {
        id: 3,
        text: 'Vegan dinosaurs\nOracle, IBM'
      }
    ]
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  getTitle = text => {
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
  };

  handleChange(event) {
    this.getActiveNote().text = event.target.value;
    this.setState({ notes: this.state.notes });
  }

  handleCreate = () => {
    console.log('handleCreate');
    let emptyNote = {
      id: this.getNextId(),
      text: ''
    };
    let notes = this.state.notes;
    notes.unshift(emptyNote);

    this.setState({
      notes: notes,
      active: emptyNote.id
    });
  };

  handleSelect = id => {
    this.setState({
      active: id
    });
  };
  render() {
    console.log('Active note', this.getActiveNote());
    return (
      <Container className="p-3">
        <Jumbotron>
          <h1>MyNotes</h1>
        </Jumbotron>

        <Row noGutters>
          <Col>
            <ListGroup>
              <Button variant="outline-primary" onClick={this.handleCreate}>
                Create note
              </Button>
              {this.state.notes.map(note => {
                return (
                  <ListGroup.Item
                    key={note.id}
                    active={note.id === this.state.active}
                    onClick={() => {
                      this.handleSelect(note.id);
                    }}
                  >
                    {this.getTitle(note.text)}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
          <Col xs={8}>
            <Form>
              <Form.Control
                as="textarea"
                value={this.getActiveNote().text}
                onChange={this.handleChange}
              ></Form.Control>
              <br />
              <Button variant="outline-danger">Delete</Button>{' '}
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
