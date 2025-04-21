import { ButtonHoverThinner } from '../../../../styles/application';
import { CustomerConsentDataContainer } from '../../../../styles/customerDetailConsent';

const ConsentImage = () => {
  return (
    <>
      <CustomerConsentDataContainer>
        <ButtonHoverThinner>
          <img
            src="/svg/icon_arrow_878787.svg"
            alt=""
            style={{ width: '2rem', height: '2rem', transform: 'rotate(-90deg)' }}
          />
        </ButtonHoverThinner>
        <img src="/img/img_consent.png" alt="" style={{ width: '8rem', height: '11rem' }} />
        <ButtonHoverThinner>
          <img
            src="/svg/icon_arrow_878787.svg"
            alt=""
            style={{ width: '2rem', height: '2rem', transform: 'rotate(90deg)' }}
          />
        </ButtonHoverThinner>
      </CustomerConsentDataContainer>
    </>
  );
};

export default ConsentImage;
