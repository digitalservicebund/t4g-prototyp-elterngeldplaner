import { Container, Row, Col } from 'react-bootstrap';
import MenuDrawer from './MenuDrawer';

const Header = ({ pageNames }) => {
  return (
    <Container
      fluid
      className="justify-content-center text-center"
      style={{
        paddingLeft: '.4rem',
        marginBottom: '1rem'
      }}>
      <Row xs="auto" className="justify-content-between text-center align-items-center">
        <Col>
          <MenuDrawer pageNames={pageNames} />
        </Col>
        <Col>{/* <img src={logo} alt="Familienportal-Logo" width="65px" height="auto" /> */}</Col>
      </Row>
    </Container>
  );
};

export default Header;
