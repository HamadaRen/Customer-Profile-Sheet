import {
  HistoryListItemHeaderBox,
  HistoryVisitInformation,
  HistoryVisitDate,
  HistoryVisitTime,
  HistoryStatus,
  HistoryTreatmentTag,
  HistoryCounselingTag,
  HistoryPurchasedProductsTag,
} from '../../../../styles/customerDetailHistory';

const HistoryHeader = () => {
  return (
    <>
      <HistoryListItemHeaderBox>
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            gap: '0.5rem',
            justifyContent: 'flex-start',
          }}
        >
          <img src="/svg/icon_arrow_878787.svg" alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
          <HistoryVisitInformation>来店済</HistoryVisitInformation>
          <HistoryVisitDate>2025/1/11（土）</HistoryVisitDate>
          <HistoryVisitTime>12:00~13:40</HistoryVisitTime>
        </div>
        <HistoryStatus>
          <HistoryTreatmentTag>施術</HistoryTreatmentTag>
          <HistoryCounselingTag>カウンセリング</HistoryCounselingTag>
          <HistoryPurchasedProductsTag>購入商品</HistoryPurchasedProductsTag>
        </HistoryStatus>
      </HistoryListItemHeaderBox>
    </>
  );
};

export default HistoryHeader;
