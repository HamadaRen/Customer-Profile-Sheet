import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 8% 8% 17% 8% 8% 25% 1fr;
  text-align: center;
  width: 100%;
  height: 100vh;
  background: #efefef;
`;

export const RegistrationButton = styled.div`
  cursor: pointer;
  background: #007bbb;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  border-radius: 3px;
  border: 0px;
  position: relative;
  box-shadow: 1px 1.6px 1px #000;
  font-weight: bold;
  &:hover {
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export const NameForm = styled.div`
  display: flex;
  align-items: center;
`;

export const KanaForm = styled.div`
  display: flex;
  align-items: center;
`;

export const BirthdayForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GenderForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TelephoneForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmailForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddressForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomerNoteForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;