import styled from 'styled-components';
import { TreatmentAddButton } from '../../styles/treatmentListAddButton';




const OperationHeaderButton = () => {


  const handleClick = () => {
    window.location.href = 'http://localhost:3000/treatmentMenu/entry';
  };
  return (
    <>
    <AddButton>
      <TreatmentAddButton
        onClick={handleClick}
        >
        施術追加
      </TreatmentAddButton>
      <h2 style={{display: 'flex', justifyContent: 'center'}}>エステサロン施術リスト</h2>
    </AddButton>
        </>
  );
};

const AddButton = styled.div`
align-items: center;
justify-content: center;
  background: #f3f3f3;
  display: flex;
  padding-right: 20rem;
`;
const SHeader = styled.div`
  text-align: center;
  position: relative;
  width: 20%;
  left: 40%;
`;

export default OperationHeaderButton;
