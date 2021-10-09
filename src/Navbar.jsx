import './index.css'
import { Button , Container, Row, Col} from 'react-bootstrap'

export default function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col><Button variant="info">Buy</Button></Col>
          <Col><Button variant="primary">Buy</Button></Col>
          <Col><Button variant="info">Buy</Button></Col>
        </Row>
      </Container>
    
    </div>
  )
}