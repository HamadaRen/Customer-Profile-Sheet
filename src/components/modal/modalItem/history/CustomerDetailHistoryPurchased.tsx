import {
  HistoryStatusBody,
  HistoryStatusBodyTitle,
  HistoryStatusBodyContent,
} from '../../../../styles/customerDetailHistory';

const HistoryPurchased = () => {
  return (
    <>
      <HistoryStatusBody>
        <HistoryStatusBodyTitle>
          <img src="/svg/icon_square.svg" alt="" style={{ width: '0.6rem', height: '0.6rem' }} />
          商品購入
        </HistoryStatusBodyTitle>
        <HistoryStatusBodyContent>
          <div>スクラブ</div>
        </HistoryStatusBodyContent>
      </HistoryStatusBody>
    </>
  );
};

export default HistoryPurchased;
