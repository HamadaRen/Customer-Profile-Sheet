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
  position: relative;
  display: flex;
  align-items: center;
  color: #dccec1;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.6px;
  background: ${COLORS.MAIN_HEADER_BROWN};
  box-shadow: 0px 4px 15px 0px rgba(53, 50, 43, 0.22);
  gap: 0.5rem;
  z-index: 10;
  white-space: nowrap;
`;

export const UserData = styled.div`
position: absolute;
right: 0;
padding: 0 2rem;
display: flex;
align-items: center;
justify-content: flex-end;
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
  /* width: 6rem; */
  height: 6rem;
  justify-content: center;
  align-items: center;
  /* gap: 0.25rem; */
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
  /* width: 6.3rem; */
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
  /* width: 8.5rem; */
  height: 6rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  /* gap: 0.5rem; */
  background-color: ${({ $selected }) => ($selected ? '#9baeca' : 'transparent')};
  /* margin-left: 1.5rem; */
  border-bottom: 1px solid #b0a396;
  padding: 0 1.8rem;
`;

export const Tel = styled.div`
  display: flex;
  /* width: 7rem; */
  padding: 0.1rem 0 0 2.5rem;
  align-items: center;
  gap: 0.5rem;
  color: var(--main-, #565249);
  text-align: center;
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* margin-left: 2.5rem; */
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
  /* width: 8.5rem; */
  height: 6rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 0.5rem; */
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
  /* gap: 8px; */
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${({ $selected }) => ($selected ? '#9baeca' : 'transparent')};
  border-bottom: 1px solid #b0a396;
  /* padding-right: 2rem; */
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
  left: 56rem;
  display: flex;
  width: 40rem;
  height: 39rem;
  padding: 1rem 0px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: #665e4d;
  box-shadow: -9px 0px 9.1px 0px rgba(125, 125, 125, 0.25);
`;

export const CustomerDetail = styled.div`
  display: flex;
  width: 36.5rem;
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
  width: 1.1rem;
  padding: 0.2rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 101.684px;
  border: 1.017px solid var(--Green-, #5d8b00);
  background: var(--text-, #fff);
  cursor: pointer;
`;

export const IconPhoto = styled.div`
  display: flex;
  width: 6rem;
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
  width: 38.5rem;
  height: 56.8rem;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 5px;
  background: #f9f5f1;
`;

export const CustomerDetailHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-bottom: 1px solid #b0a396;
  background: #f3f0ec;
  box-shadow: 0px 4px 10px 0px #ddcfc2;
  position: relative;
`;

export const CustomerDetailHeaderTab = styled.div<{ $selected?: boolean }>`
  display: flex;
  height: 1.7rem;
  padding: 0rem 1.25rem 0rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  text-align: center;
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  background: ${({ $selected }) => ($selected ? '#e9edda' : 'transparent')};
  color: ${({ $selected }) => ($selected ? '#5d8b00' : '#656565')};
  border-bottom: ${({ $selected }) => ($selected ? '2px solid #5d8b00' : 'transparent')};
`;

export const CustomerInformationBodyContainer = styled.div`
  display: flex;
  width: 36.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const CustomerInformationSubHeaderBox = styled.div`
  display: flex;
  padding-bottom: 0.2rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

export const CustomerInformationEditButtonBox = styled.div`
  display: flex;
  padding: 0 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  /* gap: 0.8rem; */
  align-self: stretch;
`;

export const CustomerInformationEditButton = styled.div`
  position: relative;
  margin: 0.8rem 0.1rem 0 0;
  display: flex;
  padding: 0.3rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 5px;
  background: var(--main-, #747d62);
  color: var(--Text-, #fff);
  font-family: 'Noto Sans JP';
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const CustomerBasicInformationSubHeaderBox = styled.div`
  display: flex;
  width: 44.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  color: #656565;
  text-align: center;
  font-family: 'Noto Sans JP';
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
  letter-spacing: 0.9px;
`;

export const CustomerBasicInformationContainer = styled.div`
  display: flex;
  width: 36.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.08rem;
`;
export const CustomerBasicInformationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;
export const CustomerDetailItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
  flex: 1 0 0;
`;
export const CustomerDetailItemTitle = styled.div`
  display: flex;
  padding: 0px 0.25rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  color: #909090;
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 0.7rem;
`;
export const CustomerDetailItem = styled.div`
  display: flex;
  width: 15rem;
  height: 1rem;
  padding: 0.4rem 0.8rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 3px;
  background: #ede5df;
  flex: 1 0 0;
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 0.8rem;
`;
export const CustomerDetailItemLong = styled.div`
  display: flex;
  width: 32.3rem;
  padding: 0.4rem 0.8rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 3px;
  background: #ede5df;
  flex: 1 0 0;
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 0.8rem;
`;

export const CustomerDetailItemTitleRight = styled.div`
  display: flex;
  padding: 0px 0.25rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  color: #909090;
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  /* margin-left: 0.7rem; */
`;

export const CustomerDetailItemRight = styled.div`
  display: flex;
  width: 15rem;
  height: 1rem;
  padding: 0.4rem 0.8rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 3px;
  background: #ede5df;
  flex: 1 0 0;
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* margin-left: 0.8rem; */
`;

export const CustomerDetailSharedSubHeaderContainer = styled.div`
  display: flex;
  width: 44.875rem;
  padding: 0.5rem 0px;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  color: #656565;
  text-align: center;
  font-family: 'Noto Sans JP';
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
  letter-spacing: 0.9px;
`;

export const CustomerDetailSharedFixedContainer = styled.div`
  /* width: 44.25rem; */
  justify-content: center;
  align-items: center;
`;

export const CustomerDetailFixedMemoBox = styled.div`
  display: flex;
  width: 32rem;
  padding: 0.3rem 1rem 0.5rem 0.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid var(--Green-, #5d8b00);
  background: #fff;
  margin-bottom: 0.5rem;
`;

export const CustomerDetailFixedMemoDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  color: var(--Green-, #5d8b00);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CustomerDetailFixedMemoBodyBox = styled.div`
  display: flex;
  padding-left: 0.9rem;
  align-items: flex-end;
  gap: 0.625rem;
  align-self: stretch;
`;

export const CustomerDetailFixedMemoBody = styled.div`
  flex: 1 0 0;
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CustomerDetailFixedMemoPerson = styled.div`
  width: 13em;
  height: 1.1rem;
  display: flex;
  font-size: 0.8rem;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  left: 0.8rem;
  gap: 0.2rem;
`;

export const CustomerDetailDateMemoBox = styled.div`
  display: flex;
  width: 32rem;
  padding: 0.3rem 1rem 0.5rem 0.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
  border-radius: 5px;
  border: 0.5px solid var(--text-30, #979797);
  background: #fff;
`;

export const CustomerDetailMemoTime = styled.div`
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CustomerDetailFooterContainer = styled.div`
  display: flex;
  width: 32rem;
  height: 1.5rem;
  padding: 13px 60px;
  justify-content: center;
  align-items: flex-end;
  gap: 30px;
  position: absolute;
  left: 0.2rem;
  bottom: 0px;
  background: rgba(86, 80, 73, 0.48);
  backdrop-filter: blur(2px);
`;

export const CustomerDetailPrinting = styled.div`
  display: flex;
  padding: 0.3rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 5px;
  border: 1px solid var(--Text-, #fff);
  background: linear-gradient(91deg, #63763d 0.73%, #819755 51.19%, #b9c572 99.67%), #146f9d;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--text-, #fff);
  font-family: Inter;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0.2rem 0;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const HistoryTabContainer = styled.div`
  display: flex;
  width: 38.5rem;
  height: 30.7rem;
  padding: 1rem 0px;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`;

export const HistoryListItemBox = styled.div`
  display: flex;
  /* width: 33.5rem; */
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--main-, #a29b93);
  box-shadow: 0px 4px 10px 0px rgba(99, 118, 61, 0.25);
`;

export const HistoryListItemHeaderBox = styled.div`
  display: flex;
  width: 33.5rem;
  padding: 0.2rem 1rem;
  justify-content: flex-end;
  align-items: center;
  gap: 0.3rem;
  background: #fff;
  border-radius: 5px;
`;

export const HistoryVisitInformation = styled.div`
  display: flex;
  width: 2.5rem;
  height: 1rem;
  padding: 0px 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 10px;
  border: 1px solid #0077fa;
  background: #eaf4ff;
  color: #0077fa;
  font-family: 'Noto Sans JP';
  font-size: 0.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const HistoryVisitDate = styled.div`
  /* width: 6rem; */
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const HistoryVisitTime = styled.div`
  color: var(--main-, #a29b93);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const HistoryStatus = styled.div`
  display: flex;
  width: 17rem;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;

export const HistoryTreatmentTag = styled.div`
  display: flex;
  padding: 0.05rem 0.3rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 3px;
  border: 1px solid var(--ground-Smart-HR_Deep, #04a9af);
  background: #f1feff;
  color: var(--ground-Smart-HR_Deep, #04a9af);
  font-family: 'Noto Sans JP';
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const HistoryCounselingTag = styled.div`
  display: flex;
  padding: 0.05rem 0.3rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 3px;
  border: 1px solid var(--orange-, #ed7100);
  background: var(--orange-, #fdeddf);
  color: var(--orange-, #ed7100);
  font-family: 'Noto Sans JP';
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const HistoryPurchasedProductsTag = styled.div`
  display: flex;
  padding: 0.05rem 0.3rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 3px;
  border: 1px solid var(--Colors-Pink, #ff2d55);
  background: #ffeaee;
  color: var(--Colors-Pink, var(--Colors-Pink, #ff2d55));
  font-family: 'Noto Sans JP';
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const HistoryTriangle = styled.div`
  position: absolute;
  top: 9.8rem;
  left: 1.5rem;
`;

export const HistoryStatusBodyBox = styled.div`
  display: flex;
  width: 33.6rem;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
  border: 1px solid var(--main-, #a29b93);
  border-radius: 3px;
  background: #fff;
`;

export const HistoryStatusBody = styled.div`
  display: flex;
  padding: 0.23rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 3px;
  border: 1px solid var(--text-10, #d6d6d6);
  background: #f9fbeb;
`;

export const HistoryStatusBodyTitle = styled.div`
  display: flex;
  width: 7.3rem;
  align-items: center;
  gap: 0.3rem;
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const HistoryStatusBodyContent = styled.div`
  display: flex;
  padding: 0px 0.875rem;
  align-items: flex-start;
  gap: 1rem;
  flex: 1 0 0;
  color: #656565;
  font-family: 'Noto Sans JP';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CustomerConsentDisplayContainer = styled.div`
  display: flex;
  height: 16rem;
  padding: 0rem 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

export const CustomerConsentTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const CustomerConsentTitle = styled.div`
  display: flex;
  align-items: center;
  width: 20.5rem;
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CustomerConsentAttachedBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  text-decoration-line: none;
`;

export const CustomerConsentContractDateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  color: var(--Text-50, #656565);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CustomerConsentContractDate = styled.div`
  display: flex;
  padding: 0.125rem 0.875rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 3px;
  background: #e4dbd3;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CustomerConsentDataContainer = styled.div`
  display: flex;
  width: 34.3125rem;
  /* flex-direction: column; */
  padding: 0.5rem 0;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
  align-self: stretch;
  /* margin: 0 0 13.5rem 1rem; */
`;

export const ConfirmationButton = styled.div`
  display: flex;
  width: 6rem;
  height: 1rem;
  padding: 0.375rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  border-radius: 5px;
  background: linear-gradient(91deg, #63763d 0.73%, #819755 51.19%, #b9c572 99.67%), #3982bd;
  border-radius: 5px;
  background: linear-gradient(91deg, #63763d 0.73%, #819755 51.19%, #b9c572 99.67%), #3982bd;
  color: var(--Text-, #fff);
  text-align: center;
  font-family: 'Noto Sans JP';
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 2rem;
  &:hover {
    opacity: 0.7;
  }
`;

export const CustomerConsentListHeader = styled.div`
  display: flex;
  padding: 0rem 0.375rem 0rem 1.625rem;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-bottom: 1px solid #d6d6d6;
  box-shadow: 0px 1px 4px 0px rgba(178, 178, 178, 0.18);
  color: var(--Text-80, #272727);
  font-family: 'Noto Sans JP';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CustomerConsentListHeaderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CustomerConsentListItemContainer = styled.div<{ $selected?: boolean }>`
  display: flex;
  width: 34.5rem;
  height: 3.5rem;
  padding: 0.3rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
  background: ${({ $selected }) => ($selected ? '#EFF5D8' : 'transparent')};
`;
export const CustomerConsentListItemBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1 0 0;
  align-self: stretch;
  border-bottom: 1px solid #d6d6d6;
`;

export const CustomerConsentCheckBox = styled.input`
  width: 1.125rem;
  height: 1.125rem;
  fill: rgba(255, 255, 255, 0.6);
  filter: drop-shadow(2px 2px 4px rgba(201, 201, 201, 0.5));
  backdrop-filter: blur(2.5px);
`;

export const CustomerConsentBodyBox = styled.div`
  display: flex;
  height: 4.5rem;
  padding-left: 0.93rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 1 0 0;
  color: var(--main-, #565249);
  font-family: 'Noto Sans JP';
  font-size: 0.93rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;

export const CustomerTicketContainer = styled.div`
  display: flex;
  height: 51.875rem;
  justify-content: center;
  align-items: flex-start;
  gap: 0.125rem;
  flex-shrink: 0;
  `;

export const CustomerTicketListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem;
  overflow-y: scroll;
`;

export const CustomerTicketListItemBox = styled.div`
  display: flex;
  width: 31.5rem;
  padding: 0.5rem 1.06rem;
  align-items: flex-start;
  gap: 0.125rem;
  border-radius: 5px;
  border: 1px solid var(--text-10, #d6d6d6);
  background: #fff;
  box-shadow: 4px 4px 10px 0px rgba(157, 159, 161, 0.25);
  margin: 0.5rem 0.2rem 0 0.4rem;
`;

export const CustomerTicketListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  flex: 1 0 0;
`;

export const CustomerTicketBodyDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.3rem;
`;

export const CustomerTicketBodyDetailTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  color: var(--main-, #575850);
  font-family: 'Noto Sans JP';
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CustomerTicketDetail = styled.div`
  display: flex;
  padding: 0px 1.8rem;
  align-items: center;
  gap: 3rem;
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CustomerTicketFooterBox = styled.div`
  display: flex;
  padding: 0px 1.56rem;
  align-items: flex-end;
  gap: 1rem;
  align-self: stretch;
`;

export const CustomerTicketFooter = styled.div`
  display: flex;
  height: 1.5rem;
  padding: 0rem 0.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  border-radius: 5px;
  border: 1px solid var(--text-50, #656565);
  background: #f9fbef;
  box-shadow: 2px 2px 4px 0px rgba(204, 204, 204, 0.25);
  color: var(--main-, #756c62);
  font-family: 'Noto Sans JP';
  font-size: 0.68rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ButtonHoverThinner = styled.div`
cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`
