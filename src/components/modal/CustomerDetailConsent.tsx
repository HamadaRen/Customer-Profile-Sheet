import React from 'react';
import styled from 'styled-components';
import { ButtonHoverThinner, ConfirmationButton, CustomerConsentAttachedBox, CustomerConsentBodyBox, CustomerConsentCheckBox, CustomerConsentContractDate, CustomerConsentContractDateBox, CustomerConsentDataContainer, CustomerConsentDisplayContainer, CustomerConsentListHeader, CustomerConsentListHeaderItem, CustomerConsentListItemBox, CustomerConsentListItemContainer, CustomerConsentTitle, CustomerConsentTitleBox } from '../../styles/application';

const CustomerDetailConsent = () => {
  return (
    <>
      <CustomerConsentDisplayContainer>
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
        <ConfirmationButton>
          詳細を確認
          <img src="/svg/icon_fileSearch.svg" alt="" style={{ width: '1rem', height: '1rem' }} />
        </ConfirmationButton>
      </CustomerConsentDisplayContainer>
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
      <CustomerConsentListItemContainer>
        <CustomerConsentListItemBox>
          <CustomerConsentCheckBox type="checkbox" />
          <CustomerConsentBodyBox>
            <div style={{textDecorationLine: 'underline'}}>
            プラピール体験
            </div>
            <CustomerConsentAttachedBox>
            <CustomerConsentContractDateBox >
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

      <CustomerConsentListItemContainer>
        <CustomerConsentListItemBox>
          <CustomerConsentCheckBox type="checkbox" />
          <CustomerConsentBodyBox>
            <div style={{textDecorationLine: 'underline'}}>
            プラピール体験
            </div>
            <CustomerConsentAttachedBox>
            <CustomerConsentContractDateBox >
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


export default CustomerDetailConsent;
