import { ListHeaderContact, Tel, ContactButton } from '../../../styles/customerListPage';

type CustomerListContactItemType = {
  setHoveredId: React.Dispatch<React.SetStateAction<string>>;
  hoveredId: string;
  userData: UserDataType;
  handleEditClick: (id: string) => void;
  index: number;
};

type UserDataType = {
  id: string;
  lastName: string;
  firstName: string;
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

const CustomerListContactItem = ({
  setHoveredId,
  hoveredId,
  userData,
  handleEditClick,
  index,
}: CustomerListContactItemType) => {

  const handleContactClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation()
    alert('繋げる')
  }

  return (
    <ListHeaderContact
      onMouseEnter={() => setHoveredId(userData.id)}
      onMouseLeave={() => setHoveredId('')}
      $selected={hoveredId === userData.id}
      onClick={() => handleEditClick(userData.id)}
      index={index}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
        <Tel>
          <img src="/svg/icon_tel.svg" alt="" style={{ width: '1.0625rem', height: '1rem', flexShrink: 0 }} />
          {userData.contact}
        </Tel>
        <Tel>
          <img
            src="/svg/icon_line.svg"
            alt=""
            style={{ width: '1.0625rem', height: '1rem', flexShrink: 0, aspectRatio: 17 / 18 }}
          />
          LINE
        </Tel>
        <Tel>
          <img
            src="/svg/icon_instagram.svg"
            alt=""
            style={{
              width: '1.0625rem',
              height: '1rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          />
          Instagram
        </Tel>
        <ContactButton onClick={handleContactClick}>
          繋げる
          <img src="/svg/icon_arrow.svg" alt="" style={{ width: '1.0625rem', height: '1.125rem', flexShrink: 0 }} />
        </ContactButton>
      </div>
    </ListHeaderContact>
  );
};

export default CustomerListContactItem;
