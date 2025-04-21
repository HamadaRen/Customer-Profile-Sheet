import { useState } from 'react';
import {
  CustomerFoot,
  CustomerFooterButton,
  CustomerFooterButtonLine,
  CustomerFooterButtonNumber,
  CustomerFootPosition,
} from '../../styles/customerFooter';

const CustomerFooter = () => {
  const [selected, setSelected] = useState<number>(1);
  const [footerId, setFooterId] = useState<number>(1);

  const handleClickUp = () => {
    if(selected === 3){
      return;
    }
    setSelected(selected + 1)
  }
  const handleClickDown = () => {
    if(selected === 1){
      return;
    }
    setSelected(selected - 1)
  }

  return (
    <CustomerFoot style={{ zIndex: 1 }}>
      <CustomerFooterButtonLine>
        <CustomerFootPosition>
          <CustomerFooterButton onClick={handleClickDown}>
            <img src="/svg/icon_leftExpansion.svg" alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
          </CustomerFooterButton>
          <CustomerFooterButtonNumber $selected={selected === 1} onClick={() => setSelected(1)}>
            1
          </CustomerFooterButtonNumber>
          <CustomerFooterButtonNumber $selected={selected === 2} onClick={() => setSelected(2)}>
            2
          </CustomerFooterButtonNumber>
          <CustomerFooterButtonNumber $selected={selected === 3} onClick={() => setSelected(3)}>
            3
          </CustomerFooterButtonNumber>
          <CustomerFooterButton onClick={handleClickUp}>
            <img
              src="/svg/icon_leftExpansion.svg"
              alt=""
              style={{ width: '1.5rem', height: '1.5rem', transform: 'rotate(180deg)' }}
            />
          </CustomerFooterButton>
        </CustomerFootPosition>
      </CustomerFooterButtonLine>
    </CustomerFoot>
  );
};

export default CustomerFooter;
