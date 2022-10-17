import React, { useContext } from 'react';
import PageTemplate from '../../components/PageTemplate';
import { TextNormal } from '../../components/styled/StyledText';
import NavigationButton from '../../components/ui/NavigationButton';
import FormContext from '../../context/FormContext';

const StartPage = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext);
  return (
    <PageTemplate pageTitle="Der Elterngeldplaner">
      <TextNormal>
        Mit dem Elterngeldplaner könnt ihr unverbindlich euer Elterngeld berechnen und planen, wann
        ihr welche Elterngeld-Variante bekommen möchtet.
        <br />
        Ihr könnt ausprobieren, wie sich Basiselterngeld, ElterngeldPlus und Partnerschaftsbonus für
        euch am sinnvollsten kombinieren lässt und wie hoch die Beträge voraussichtlich sein werden.
      </TextNormal>

      <NavigationButton buttonTitle="Weiter" nextPage={activeStepIndex + 1} />
    </PageTemplate>
  );
};

export default StartPage;
