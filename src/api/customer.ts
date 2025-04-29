type UserDetailsType = {
  firstName: string;
  lastName: string;
  firstNameKana: string;
  lastNameKana: string;
  birthday?: string;
  // gender: string;
  tel: string;
  line?: string;
  instagram?: string;
  email?: string;
  address?: string;
};

export const apiPostCustomer = (
  // token: string,
  body: UserDetailsType,
  // StringBirthday: string,
  callback: () => void
) => {
  // body.birthday = StringBirthday;
  const url = `http://localhost:3011/customer`;
  // if (body.email === '') {
  //   body.email = undefined;
  // }
  // if (body.line === '') {
  //   body.line = undefined;
  // }
  // if (body.instagram === '') {
  //   body.instagram = undefined;
  // }

  try {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "X-Ticket-Authorization": token,
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        if (callback) {
          callback();
        }
      }
    });
  } catch (e) {
    console.log(e);
    // toast.error("チケットの登録に失敗しました");
  }
};