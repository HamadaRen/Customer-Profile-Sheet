import styled from "styled-components";

export const CustomerDetail = styled.div`
  display: flex;
  width: calc(100% - 2rem);
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 1rem;
  border-radius: 5px;
  border: 1px solid #f3e6da;
  background: linear-gradient(90deg, #524c45 0%, #827a6e 100%), linear-gradient(90deg, #69635b 0%, #cfc3b3 100%);
  overflow: hidden;
`;

export const CustomerDetailName = styled.div`
  color: var(--text-, #fff);
  font-family: 'Noto Sans JP';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CustomerNameKana = styled.div`
  color: var(--text-, #fff);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CustomerDetailNumber = styled.div`
  color: var(--text-, #fff);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TelIcon = styled.div`
  display: flex;
  width: 1.75rem;
  height: 1.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 1.017px solid #5d8b00;
  background: #fff;
  cursor: pointer;
`;

export const IconPhoto = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  margin-left: auto;
  position: relative;
  bottom: -0.25rem;
  gap: 0.3rem;
`;

export const ManagerName = styled.div`
  color: var(--text-, #fff);
  font-family: 'Noto Sans JP';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;