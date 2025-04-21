import {
  CustomerConsentTitleBox,
  CustomerConsentTitle,
  CustomerConsentAttachedBox,
  CustomerConsentContractDateBox,
  CustomerConsentContractDate,
} from '../../../../styles/customerDetailConsent';

const ConsentTitle = () => {
  return (
    <>
      <CustomerConsentTitleBox>
        <CustomerConsentTitle>
          <img src="/svg/icon_document_green.svg" alt="" style={{ width: '1rem', height: '1rem' }} />
          {'プラピール体験'}
        </CustomerConsentTitle>
        <CustomerConsentAttachedBox>
          <CustomerConsentContractDateBox>
            契約日
            <CustomerConsentContractDate>{'2025年1月20日'}</CustomerConsentContractDate>
          </CustomerConsentContractDateBox>
          <CustomerConsentContractDateBox>
            担当者
            <CustomerConsentContractDate>{'濵田錬'}</CustomerConsentContractDate>
          </CustomerConsentContractDateBox>
        </CustomerConsentAttachedBox>
      </CustomerConsentTitleBox>
    </>
  );
};

export default ConsentTitle;
