import { ButtonHoverThinner } from '../../../../styles/application';
import { CustomerConsentListHeader, CustomerConsentListHeaderItem } from '../../../../styles/customerDetailConsent';

const ConsentList = () => {
  return (
    <>
      <CustomerConsentListHeader>
        <CustomerConsentListHeaderItem>
          <ButtonHoverThinner>
            <img
              src="/svg/icon_hamburger_green.svg"
              alt=""
              style={{ width: '1.4rem', height: '1.4rem', padding: '0.5rem 0 0 0' }}
            />
          </ButtonHoverThinner>
          同意書一覧
        </CustomerConsentListHeaderItem>
      </CustomerConsentListHeader>
    </>
  );
};

export default ConsentList;
