import { Container, Row, Col } from 'react-bootstrap';
import Image from './FaviconCLear.png';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Pro👶Shop and <img src={Image} alt="FaviconImage" style={{ maxHeight: '4vh' }} /> , a junior developer</Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;