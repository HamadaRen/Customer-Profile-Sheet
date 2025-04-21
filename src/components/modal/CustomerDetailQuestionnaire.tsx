import {
  CustomerInformationEditButtonBox,
  CustomerInformationEditButton,
  QuestionnaireContainer,
} from '../../styles/customerDetailInformation';
import QuestionnaireAllergy from './modalItem/questionnaire/CustomerModalQuestionnaireAllergy';
import CustomerModalQuestionnaireConcern from './modalItem/questionnaire/CustomerModalQuestionnaireConcern';
import QuestionnaireHeight from './modalItem/questionnaire/CustomerModalQuestionnaireHeight';
import QuestionnaireMaintenance from './modalItem/questionnaire/CustomerModalQuestionnaireMaintenance';
import QuestionnairePregnancy from './modalItem/questionnaire/CustomerModalQuestionnairePregnancy';
import CustomerModalQuestionnairePurpose from './modalItem/questionnaire/CustomerModalQuestionnairePurpose';

type QuestionnaireType = {
  id: string;
  height: number;
  weight: number;
  pregnancy: string;
  medicine: string;
  surgery: string;
  allergy: string;
  purpose: string;
  pointsOfConcern: string;
};

const CustomerDetailQuestionnaire = () => {
  return (
    <QuestionnaireContainer>
      <CustomerInformationEditButtonBox style={{ padding: '0 2.4rem' }}>
        <CustomerInformationEditButton>
          情報を編集する
          <img src="/svg/icon_pen.svg" alt="" style={{ width: '0.8rem', height: '0.8rem' }} />
        </CustomerInformationEditButton>
      </CustomerInformationEditButtonBox>
      <QuestionnaireHeight />
      <QuestionnairePregnancy />
      <QuestionnaireMaintenance />
      <QuestionnaireAllergy />
      <CustomerModalQuestionnairePurpose />
      <CustomerModalQuestionnaireConcern />
    </QuestionnaireContainer>
  );
};

export default CustomerDetailQuestionnaire;
