import { ButtonHoverThinner } from '../../../../styles/application';
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

type HistoryHeaderType = {
  open: boolean;
  handleClickArrow: () => void;
};

const HistoryHeader = ({ open, handleClickArrow }: HistoryHeaderType) => {
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
          <ButtonHoverThinner onClick={handleClickArrow}>
            {open ? (
              <img
                src="/svg/icon_arrow_878787.svg"
                alt=""
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  transform: 'rotate(0deg)',
                  transition: '0.5s',
                  animationDirection: 'normal',
                }}
              />
            ) : (
              <img
                src="/svg/icon_arrow_878787.svg"
                alt=""
                style={{ width: '1.5rem', height: '1.5rem', transform: 'rotate(180deg)', transition: '0.5s' }}
              />
            )}
          </ButtonHoverThinner>
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
