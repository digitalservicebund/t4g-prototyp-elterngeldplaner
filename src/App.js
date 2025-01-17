import './App.css';
import { useState, useContext, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Planner from './pages/planner/Planner';
import Header from './components/ui/Header';
import NameInputPage from './pages/nameInputPage/NameInputPage';
import StartPage from './pages/startPage/StartPage';
import FormContext from './context/FormContext';
import BirthDatePage from './pages/birthDatePage/BirthDatePage';
import IncomePage from './pages/incomePage/IncomePage';
import EGOverviewPage from './pages/egOverview/EGOverviewPage';
import FinalSummeryPage from './pages/finalSummeryPage/FinalSummeryPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState(<StartPage />);
  const { activeStepIndex } = useContext(FormContext);

  const pageNames = [
    'Start',
    'Wie heißt ihr?',
    'Geburtsdatum eures Kindes',
    'Euer Einkommen',
    'Berechnetes Elterngeld',
    'Planer',
    'Zusammenfassung eurer Planung'
  ];

  useEffect(() => {
    switch (activeStepIndex) {
      case 0:
        setCurrentPage(<StartPage />);
        break;
      case 1:
        setCurrentPage(<NameInputPage />);
        break;
      case 2:
        setCurrentPage(<BirthDatePage />);
        break;
      case 3:
        setCurrentPage(<IncomePage />);
        break;
      case 4:
        setCurrentPage(<EGOverviewPage />);
        break;
      case 5:
        setCurrentPage(<Planner />);
        break;
      case 6:
        setCurrentPage(<FinalSummeryPage />);
        break;
      default:
        setCurrentPage(<StartPage />);
        break;
    }
  }, [activeStepIndex]);

  return (
    <Container style={{ maxWidth: '600px' }}>
      <Header pageNames={pageNames} />
      {currentPage}
    </Container>
  );
};

export default App;
