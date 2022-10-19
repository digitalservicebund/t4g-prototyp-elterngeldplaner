import React, { useContext } from 'react';
import { Card, Container, ListGroup, Row, Col } from 'react-bootstrap';
import { green } from '@mui/material/colors';
import { Button } from '@chakra-ui/react';
import { AiFillDownCircle } from 'react-icons/ai';
import {
  LargeTitle,
  TextBold,
  TextNormal,
  TextExtraSmall,
  LargeTextBold
} from '../../components/styled/StyledText';
import FormContext from '../../context/FormContext';
import constants from '../../utils/constants.json';
import calculateEG from '../../utils/calculateEG';
import DescriptionDrawer from './DescriptionDrawer';

const EGCard = ({ variant, title }) => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext);

  const getHeaderColor = () => {
    return constants.varianten[variant].colorDeactivated;
  };

  const getOverviewOneParent = (parentid) => {
    return (
      <Col>
        <Row>
          <Col className="p-0">
            <TextNormal>{formData.names_parent[parentid]}</TextNormal>
          </Col>
        </Row>
        <Row>
          <Col className="p-0" xs={5}>
            <LargeTextBold>
              {calculateEG(formData.income_parent[parentid], variant, 0)} €
            </LargeTextBold>
          </Col>
          <Col className="p-0 align-items-center" xs={7}>
            <TextExtraSmall>pro Monat</TextExtraSmall>
          </Col>
        </Row>
      </Col>
    );
  };
  return (
    <Card style={{ padding: 0, marginTop: 15 }}>
      <Card.Header
        style={{
          backgroundColor: getHeaderColor(),
          paddingLeft: '15px',
          paddingTop: '5px',
          paddingBottom: '5px'
        }}>
        <Container className="p-0">
          <Row className="d-flex align-items-center justify-content-between">
            <Col xs={11}>{title}</Col>
            <Col xs={1} className="d-flex justify-content-center">
              <DescriptionDrawer variant={variant} />
            </Col>
          </Row>
        </Container>
      </Card.Header>
      <Card.Body style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        {/* <Card.Text> */}
        <Container>
          <Row>
            {getOverviewOneParent(0)}
            {getOverviewOneParent(1)}
          </Row>
        </Container>
        {/* </Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default EGCard;