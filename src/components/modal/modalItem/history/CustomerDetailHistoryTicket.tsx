import {
  HistoryStatusBody,
  HistoryStatusBodyTitle,
  HistoryStatusBodyContent,
} from '../../../../styles/customerDetailHistory';

const HistoryTicket = () => {
  return (
    <>
      <HistoryStatusBody>
        <HistoryStatusBodyTitle>
          <img src="/svg/icon_square.svg" alt="" style={{ width: '0.6rem', height: '0.6rem' }} />
          使用チケット
        </HistoryStatusBodyTitle>
        <HistoryStatusBodyContent>
          <div>ララピール体験</div>
          <div>ボディ10パーツ券</div>
        </HistoryStatusBodyContent>
      </HistoryStatusBody>
    </>
  );
};

export default HistoryTicket;
