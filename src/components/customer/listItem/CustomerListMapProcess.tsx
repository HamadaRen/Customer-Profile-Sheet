import { CustomerId, ListHeaderCustomerName, Visitors, Remarks } from '../../../styles/customerListPage';
import CustomerListContactItem from './CustomerListContactItem';
import CustomerListTicketItem from './CustomerListTicketItem';

type CustomerListMapProcessType = {
  fakeData: UserDataType[];
  setHoveredId:  React.Dispatch<React.SetStateAction<string>>;
  hoveredId: string;
  handleEditClick: (id: string) => void;
};

type UserDataType = {
  id: string;
  name: string;
  contact: string;
  ticket: string;
  visit: string;
  firstVisit: string;
  lastVisit: string;
  period: string;
  staff: string;
  memo: string;
};

const CustomerListMapProcess = ({
  fakeData,
  setHoveredId,
  hoveredId,
  handleEditClick,
}: CustomerListMapProcessType) => {
  return (
    <>
      {fakeData.map((userData, index) => (
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
              {userData.name}
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
