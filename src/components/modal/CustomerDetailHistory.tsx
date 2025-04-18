import {
  HistoryCounselingTag,
  HistoryListItemBox,
  HistoryListItemHeaderBox,
  HistoryPurchasedProductsTag,
  HistoryStatus,
  HistoryStatusBody,
  HistoryStatusBodyBox,
  HistoryStatusBodyContent,
  HistoryStatusBodyTitle,
  HistoryTabContainer,
  HistoryTreatmentTag,
  HistoryTriangle,
  HistoryVisitDate,
  HistoryVisitInformation,
  HistoryVisitTime,
} from '../../styles/application';

const CustomerDetailHistory = () => {
  return (
    <HistoryTabContainer>
      <HistoryListItemBox>
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
        <HistoryStatusBodyBox>
          <HistoryTriangle>
            <img src="/svg/icon_triangle.svg" alt="" style={{ width: '6.18rem', height: '0.75rem' }} />
          </HistoryTriangle>
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
          <HistoryStatusBody>
            <HistoryStatusBodyTitle>
              <img src="/svg/icon_square.svg" alt="" style={{ width: '0.6rem', height: '0.6rem' }} />
              カウンセリング
            </HistoryStatusBodyTitle>
            <HistoryStatusBodyContent>
              <div>新規ご契約</div>
            </HistoryStatusBodyContent>
          </HistoryStatusBody>
          <HistoryStatusBody>
            <HistoryStatusBodyTitle>
              <img src="/svg/icon_square.svg" alt="" style={{ width: '0.6rem', height: '0.6rem' }} />
              商品購入
            </HistoryStatusBodyTitle>
            <HistoryStatusBodyContent>
              <div>スクラブ</div>
            </HistoryStatusBodyContent>
          </HistoryStatusBody>
        </HistoryStatusBodyBox>
      </HistoryListItemBox>
    </HistoryTabContainer>
  );
};

export default CustomerDetailHistory;
