import {
  Ticket,
  TicketName,
  TicketTime,
  TicketKinds,
  TicketKindsTime,
  TicketButton,
} from '../../../styles/customerListPage';

type CustomerListContactItemType = {
  setHoveredId: React.Dispatch<React.SetStateAction<string>>;
  hoveredId: string;
  userData: UserDataType;
  handleEditClick: (id: string) => void;
  index: number;
};

type UserDataType = {
  id: string;
  name: string;
  tel: string;
  line: string;
  instagram: string;
  ticket: string;
  visit: string;
  firstVisit: string;
  lastVisit: string;
  period: string;
  staff: string;
  memo: string;
};

const CustomerListTicketItem = ({
  setHoveredId,
  hoveredId,
  userData,
  handleEditClick,
  index,
}: CustomerListContactItemType) => {
  const handleTicketClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    alert('チケット情報');
  };

  return (
    <Ticket
      key={userData.id}
      onMouseEnter={() => setHoveredId(userData.id)}
      onMouseLeave={() => setHoveredId('')}
      $selected={hoveredId === userData.id}
      onClick={() => handleEditClick(userData.id)}
      index={index}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
        <TicketName>{userData.ticket}</TicketName>
        <TicketTime>使用数(2/5)</TicketTime>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <TicketKinds>その他チケット</TicketKinds>
          <TicketKindsTime>+8</TicketKindsTime>
          <TicketButton onClick={handleTicketClick}>
            チケット情報
            <img
              src="/svg/icon_ticket_green.svg"
              alt=""
              style={{ width: '1.0625rem', height: '1.125rem', flexShrink: 0 }}
            />
          </TicketButton>
        </div>
      </div>
    </Ticket>
  );
};

export default CustomerListTicketItem;
