import { CustomerId, ListHeaderCustomerName, Visitors, Remarks } from '../../../styles/customerListPage';
import CustomerListContactItem from './CustomerListContactItem';
import CustomerListTicketItem from './CustomerListTicketItem';

type CustomerListMapProcessType = {
  customerDataArray: UserDetailsType[];
  fakeData: UserDataType[];
  setHoveredId: React.Dispatch<React.SetStateAction<string>>;
  hoveredId: string;
  handleEditClick: (id: string) => void;
};

type UserDetailsType = {
  id: string;
  lastName: string;
  firstName: string;
  tel: string;
  line: string;
  instagram: string;
  created_at: string;
  update_at: string;
};

type UserDataType = {
  id: string;
  ticket: string;
  visit: string;
  firstVisit: string;
  lastVisit: string;
  period: string;
  staff: string;
  memo: string;
};

const CustomerListMapProcess = ({
  customerDataArray,
  fakeData,
  setHoveredId,
  hoveredId,
  handleEditClick,
}: CustomerListMapProcessType) => {
  const joinCustomerDataAry = customerDataArray.map((customer, index) => {
    const AnotherData = fakeData[index];
    return {
      id: customer.id,
      lastName: customer.lastName,
      firstName: customer.firstName,
      tel: customer.tel,
      line: customer.line,
      instagram: customer.instagram,
      ticket: AnotherData.ticket,
      visit: AnotherData.visit,
      firstVisit: AnotherData.firstVisit,
      lastVisit: AnotherData.lastVisit,
      period: AnotherData.period,
      staff: AnotherData.period,
      memo: AnotherData.memo,
    };
  });

  return (
    <>
      {joinCustomerDataAry.map((userData, index) => (
        <>
          <CustomerId
            key={userData.id}
            onMouseEnter={() => setHoveredId(userData.id)}
            onMouseLeave={() => setHoveredId('')}
            $selected={hoveredId === userData.id}
            onClick={() => handleEditClick(userData.id)}
            index={index}
          >
            {userData.id}
          </CustomerId>
          <ListHeaderCustomerName
            onMouseEnter={() => setHoveredId(userData.id)}
            onMouseLeave={() => setHoveredId('')}
            $selected={hoveredId === userData.id}
            onClick={() => handleEditClick(userData.id)}
            index={index}
          >
            <div style={{ display: 'flex', width: '7rem', justifyContent: 'center', alignItems: 'center' }}>
              {userData.lastName} {userData.firstName}
            </div>
          </ListHeaderCustomerName>
          <CustomerListContactItem
            setHoveredId={setHoveredId}
            hoveredId={hoveredId}
            userData={userData}
            handleEditClick={handleEditClick}
            index={index}
          />
          <CustomerListTicketItem
            setHoveredId={setHoveredId}
            hoveredId={hoveredId}
            userData={userData}
            handleEditClick={handleEditClick}
            index={index}
          />
          <Visitors
            onMouseEnter={() => setHoveredId(userData.id)}
            onMouseLeave={() => setHoveredId('')}
            $selected={hoveredId === userData.id}
            onClick={() => handleEditClick(userData.id)}
            index={index}
          >
            {userData.visit + '回'}
          </Visitors>
          <CustomerId
            onMouseEnter={() => setHoveredId(userData.id)}
            onMouseLeave={() => setHoveredId('')}
            $selected={hoveredId === userData.id}
            onClick={() => handleEditClick(userData.id)}
            index={index}
          >
            {userData.firstVisit}
          </CustomerId>
          <CustomerId
            key={userData.id}
            onMouseEnter={() => setHoveredId(userData.id)}
            onMouseLeave={() => setHoveredId('')}
            $selected={hoveredId === userData.id}
            onClick={() => handleEditClick(userData.id)}
            index={index}
          >
            {userData.lastVisit}
          </CustomerId>
          <CustomerId
            onMouseEnter={() => setHoveredId(userData.id)}
            onMouseLeave={() => setHoveredId('')}
            $selected={hoveredId === userData.id}
            onClick={() => handleEditClick(userData.id)}
            index={index}
          >
            {userData.period}
          </CustomerId>
          <CustomerId
            onMouseEnter={() => setHoveredId(userData.id)}
            onMouseLeave={() => setHoveredId('')}
            $selected={hoveredId === userData.id}
            onClick={() => handleEditClick(userData.id)}
            index={index}
          >
            {userData.staff}
          </CustomerId>
          <Remarks
            onMouseEnter={() => setHoveredId(userData.id)}
            onMouseLeave={() => setHoveredId('')}
            $selected={hoveredId === userData.id}
            onClick={() => handleEditClick(userData.id)}
            index={index}
          >
            {userData.memo}
          </Remarks>
        </>
      ))}
    </>
  );
};

export default CustomerListMapProcess;
