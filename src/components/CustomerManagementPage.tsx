import React from 'react'

const CustomerManagementPage = () => {

  const dataArray = [
    {lastName: "濵田", firstName: "錬", lastNameKana: "ハマダ", firstNameKana: "レン", age: "23", gender: "男性", tel: ""}
  ]

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>姓</th>
            <th>名</th>
            <th>セイ</th>
            <th>メイ</th>
            <th>年齢</th>
            <th>性別</th>
            <th>電話番号</th>
            <th>メールアドレス</th>
            <th>住所</th>
          </tr>
        </thead>
        <tbody>
          {}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerManagementPage
