import {
  CustomerConsentListItemContainer,
  CustomerConsentListItemBox,
  CustomerConsentCheckBox,
  CustomerConsentBodyBox,
  CustomerConsentAttachedBox,
  CustomerConsentContractDateBox,
  CustomerConsentContractDate,
} from '../../../../styles/customerDetailConsent';

type ConsentListItemType = {
  selectedId: string;
  setSelectedId: React.Dispatch<React.SetStateAction<"1" | "2">>;
}

const ConsentListItem = ({selectedId, setSelectedId}: ConsentListItemType) => {
  return (
    <>
      <CustomerConsentListItemContainer $selected={selectedId === '1'} onClick={() => setSelectedId('1')}>
        <CustomerConsentListItemBox>
          <CustomerConsentCheckBox type="checkbox" />
          <CustomerConsentBodyBox>
            <div style={{ textDecorationLine: 'underline' }}>プラピール体験</div>
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
          </CustomerConsentBodyBox>
        </CustomerConsentListItemBox>
      </CustomerConsentListItemContainer>
    </>
  );
};

export default ConsentListItem;
