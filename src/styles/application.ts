import styled from 'styled-components';
import { COLORS } from './color';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 3.2rem 1fr;
  overflow: hidden;
`;

export const SHeader = styled.div`
  width: 100%;
  height: 3.125rem;
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  color: #dccec1;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.6px;
  background: ${COLORS.MAIN_HEADER_BROWN};
  box-shadow: 0px 4px 15px 0px rgba(53, 50, 43, 0.22);
  gap: 0.5rem;
  z-index: 10;
`;

export const UserData = styled.div`
width: 12.5rem;
position: relative;
left: 62rem;
display: flex;
align-items: center;
justify-content: center;
gap: 0.69rem;
`

export const SBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

export const RightContainer = styled.div<{ $visibleSidebar: boolean }>`
  width: ${({ $visibleSidebar }) => ($visibleSidebar ? 'calc(100% - 13rem)' : '100%')};
  transition: width 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SidebarHeader = styled.div`
  display: flex;
  width: 11.25rem;
  padding: 0.5rem 0;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: #dccec1;
  font-size: 1.125rem;
  font-weight: 700;
  border-bottom: 1px solid rgba(220, 206, 193, 0);
  background-image: -webkit-linear-gradient(left, transparent, #dccec1 50%, #dccec1 50%, transparent);
  background-image: linear-gradient(to right, transparent, #dccec1 50%, #dccec1 50%, transparent);
  background-size: 10rem 0.08rem;
  background-position: bottom;
  background-repeat: no-repeat;
`;

export const SearchCustomer = styled.div`
  display: inline-flex;
  padding: 0.5rem 1.25rem 0.625rem 1.25rem;
  align-items: flex-end;
  gap: 0.625rem;
  margin: 0.8rem 26.125rem 0.8rem 0.8rem;
  border-radius: 10px;
  background: rgba(115, 115, 115, 0.7);
  background-blend-mode: multiply;
`;

export const HeaderCustomerId = styled.div`
  display: flex;
  width: 13rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: normal;
  align-self: stretch;
`;

export const CustomerIdSearch = styled.input`
  display: flex;
  height: 1.25rem;
  padding: 5px 10px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid #656565;
  background: #fff;
`;

export const SearchButton = styled.div`
  display: flex;
  width: 7rem;
  height: 1.8rem;
  padding: 0.25rem 2.6875rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  background: linear-gradient(91deg, #63763d 0.73%, #819755 51.19%, #b9c572 99.67%),
    linear-gradient(90deg, #454137 0%, #aba188 100%);
  box-shadow: 6px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--text-, #fff);
  text-align: center;
  text-shadow: 2px 2px 3px rgba(117, 71, 17, 0.49);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: 0.9px;
  &:hover {
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export const AdvancedSearch = styled.div`
  display: flex;
  padding: 0.1rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: #fff;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
`;

export const BottomExpansion = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  &:hover {
    filter: brightness(50%);
    box-shadow: inset 0 0 0 9999px rgba(0, 0, 0, 1);
  }
`;

export const CustomerFooterButtonLine = styled.div`
  display: inline-flex;
  align-items: center;
  text-align: center;
  gap: 0.4375rem;
  margin-bottom: 0.5rem;
  margin-top: 0.8rem;
`;

export const CustomerFooterButton = styled.div`
  display: flex;
  width: 0.5rem;
  height: 1rem;
  padding: 0.375rem 0.6875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  background: #f3e6da;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
export const CustomerFooterButtonNumber = styled.div<{ $selected?: boolean }>`
  display: flex;
  width: 0.5rem;
  height: 1rem;
  padding: 0.375rem 0.6875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 3px;
  background: #f3e6da;
  font-size: 1rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  cursor: pointer;
  background-color: ${({ $selected }) => ($selected ? '#756c62' : 'f3e6da')};
  color: ${({ $selected }) => ($selected ? '#fff' : '#756c62')};
  &:hover {
    opacity: 0.5;
  }
`;

export const SHeaderGradient = styled.div`
  display: flex;
  padding: 0.1rem 0;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-bottom: 0.06rem solid var(--text-10, #d6d6d6);
  background: linear-gradient(90deg, #443E33 0%, #878480 100%), linear-gradient(90deg, #524c45 0%, #6b655d 100%),
    linear-gradient(90deg, #787066 0%, #decfbd 100%);
  color: var(--main-, #f3e6da);
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const CustomerNumber = styled.div`
  display: flex;
  /* width: 6rem; */
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  color: var(--main-, #f3e6da);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CustomerName = styled.div`
  display: flex;
  /* width: 6rem; */
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  color: var(--main-, #f3e6da);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Contact = styled.div`
  display: flex;
  /* width: 11rem; */
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--main-, #f3e6da);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  /* padding-right: 2rem; */
`;

export const TicketInformation = styled.div`
  display: flex;
  /* width: 11rem; */
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--main-, #f3e6da);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  /* padding-right: 2rem; */
`;

export const NumberOfVisitors = styled.div`
  display: flex;
  /* width: 5.7rem; */
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--main-, #f3e6da);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  /* margin-left: 1rem; */
`;

export const FirstVisit = styled.div`
  display: flex;
  /* width: 6.3rem; */
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--main-, #f3e6da);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LastVisit = styled.div`
  display: flex;
  /* width: 6.3rem; */
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--main-, #f3e6da);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const UsedPeriod = styled.div`
  display: flex;
  /* width: 6.3rem; */
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--main-, #f3e6da);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const PersonInCharged = styled.div`
  display: flex;
  /* width: 7rem; */
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--main-, #f3e6da);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SharedInformation = styled.div`
  display: flex;
  /* width: 17.4rem; */
  padding: 0 1rem;
  align-items: center;
  flex-shrink: 0;
  color: var(--main-, #f3e6da);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CustomerId = styled.div<{ $selected?: boolean }>`
  display: flex;
  width: 6rem;
  height: 6rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${({ $selected }) => ($selected ? '#9baeca' : 'transparent')};
  color: inherit;
  padding: 0 0.6rem;
  /* padding-bottom: 1rem; */
  border-bottom: 1px solid #b0a396;
`;

export const ListHeaderCustomerName = styled.div<{ $selected?: boolean }>`
  display: flex;
  width: 6.3rem;
  height: 6rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: ${({ $selected }) => ($selected ? '#9baeca' : 'transparent')};
  border-bottom: 1px solid #b0a396;
  padding: 0 0.74rem;
`;

export const ListHeaderContact = styled.div<{ $selected?: boolean }>`
  display: flex;
  width: 8.5rem;
  height: 6rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ $selected }) => ($selected ? '#9baeca' : 'transparent')};
  /* margin-left: 1.5rem; */
  border-bottom: 1px solid #b0a396;
  padding: 0 1.8rem;
`;

export const Tel = styled.div`
  display: flex;
  width: 7rem;
  padding: 0.1rem 0;
  align-items: center;
  gap: 0.5rem;
  color: var(--main-, #565249);
  text-align: center;
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 2.5rem;
`;

export const ContactButton = styled.div`
  display: flex;
  width: 6.5rem;
  height: 1.3rem;
  padding: 0 1.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 10px;
  border: 1px solid var(--orange-, #ed7100);
  background: var(--orange-, #fdeddf);
  color: var(--orange-, #ed7100);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 1.4rem;
  margin-bottom: 0.4rem;
`;

export const Ticket = styled.div<{ $selected?: boolean }>`
  display: flex;
  width: 8.5rem;
  height: 6rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ $selected }) => ($selected ? '#9baeca' : 'transparent')};
  /* margin-left: 1.7rem; */
  border-bottom: 1px solid #b0a396;
  padding: 0 1.9rem;
`;

export const TicketName = styled.div`
  display: flex;
  padding: 0.1rem 0.5rem;
  align-items: center;
  gap: 8px;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 2rem;
`;
export const TicketTime = styled.div`
  display: flex;
  padding: 0rem 0.5rem;
  align-items: center;
  gap: 8px;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 2rem;
`;
export const TicketKinds = styled.div`
  display: flex;
  padding: 0.1rem;
  padding-left: 0.5rem;
  align-items: center;
  gap: 8px;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 2rem;
`;

export const TicketKindsTime = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--main-, #5d8b00);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-right: 0.5rem;
`;

export const TicketButton = styled.div`
  display: flex;
  width: 6.5rem;
  height: 1.3rem;
  padding: 0 1.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 10px;
  border: 1px solid var(--orange-, #5d8b00);
  background: var(--orange-, #e9edda);
  color: var(--orange-, #5d8b00);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 1.4rem;
  margin-top: 0.2rem;
`;

export const Visitors = styled.div<{ $selected?: boolean }>`
  display: flex;
  height: 6rem;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${({ $selected }) => ($selected ? '#9baeca' : 'transparent')};
  border-bottom: 1px solid #b0a396;
  padding-right: 2rem;
`;

export const Remarks = styled.div<{ $selected?: boolean }>`
  display: flex;
  /* width: 284px; */
  height: 6rem;
  padding: 0 1rem;
  align-items: center;
  gap: 8px;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${({ $selected }) => ($selected ? '#9baeca' : 'transparent')};
  border-bottom: 1px solid #b0a396;
`;

export const SButton = styled.div<{ $selected?: boolean }>`
  height: 2rem;
  /* border: 1px solid #000; */
  align-items: center;
  background-color: ${({ $selected }) => ($selected ? '#dcdcdc' : '#dcdcdc')};
  color: inherit;
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 53rem;
  display: flex;
  width: 43rem;
  height: 64.375rem;
  padding: 1rem 0px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: #665e4d;
  box-shadow: -9px 0px 9.1px 0px rgba(125, 125, 125, 0.25);
`;

export const CustomerDetail = styled.div`
  display: flex;
  width: 39rem;
  height: 3rem;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid var(--main-, #f3e6da);
  background: linear-gradient(90deg, #524c45 0%, #827a6e 100%), linear-gradient(90deg, #69635b 0%, #cfc3b3 100%);
`;

export const CustomerDetailName = styled.div`
  color: var(--text-, #fff);
  font-family: 'Noto Sans JP';
  font-size: 1.3rem;
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
  width: 1.2rem;
  padding: 0.5rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 101.684px;
  border: 1.017px solid var(--Green-, #5d8b00);
  background: var(--text-, #fff);
`;

export const IconPhoto = styled.div`
  display: flex;
  width: 8.1rem;
  height: 2.1rem;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 17rem;
  top: 0.5rem;
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

export const CustomerInformationContainer = styled.div`
  display: flex;
  width: 41rem;
  height: 56.8rem;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 5px;
  background: #f9f5f1;
`;
