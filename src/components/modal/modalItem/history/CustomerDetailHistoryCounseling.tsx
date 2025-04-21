import { HistoryStatusBody, HistoryStatusBodyTitle, HistoryStatusBodyContent } from '../../../../styles/customerDetailHistory';

const HistoryCounseling = () => {
  return (
    <>
      <HistoryStatusBody>
        <HistoryStatusBodyTitle>
          <img src="/svg/icon_square.svg" alt="" style={{ width: '0.6rem', height: '0.6rem' }} />
          カウンセリング
        </HistoryStatusBodyTitle>
        <HistoryStatusBodyContent>
          <div>新規ご契約</div>
        </HistoryStatusBodyContent>
      </HistoryStatusBody>
    </>
  );
};

export default HistoryCounseling;
