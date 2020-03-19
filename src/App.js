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
*/

class App extends React.Component {
  state = {
    active: 1,

    notes: [
      {
        id: 1,
        text: 'lala'
      },
      {
        id: 2,
        text: 'lala2\nlalala'
      },
      {
        id: 3,
        text: 'lal4444\nlalala'
      }
    ]
  };

  getTitle = text => text.split('\n')[0];

  getNextId = () => this.state.notes.length + 1;

  handleCreate = () => {
    console.log('handleCreate');
    let emptyNote = {
      id: this.getNextId(),
      text: ''
    };
    let notes = this.state.notes;
    notes.push(emptyNote);

    this.setState({
      notes: notes
    });
  };
  handleSelect = id => {
    console.log('handleSelect', id);
    this.setState({
      active: id
    });
  };
  render() {
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
              <Form.Control as="textarea"></Form.Control>
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
