import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Container className="p-3">
        <Jumbotron>
          <h1>MyNotes</h1>
          <Button variant="success">Register!</Button>{' '}
        </Jumbotron>

        <Row noGutters>
          <Col>
            <ListGroup>
              <Button variant="outline-danger">Delete</Button>{' '}
              <Button variant="outline-info">Edit</Button>{' '}
              <Button variant="outline-primary">Create note</Button>{' '}
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={8}>
            <Form>
              <Form.Control as="textarea"></Form.Control>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/* Edit <code>src/App.js</code> and save to reload. */}
//           <b>My Notebook</b>
//           <br></br>
//           <input
//             id="txtEmail"
//             type="email"
//             class="login-input"
//             placeholder="ejemplo@ejemplo.com"
//           />
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Register
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
