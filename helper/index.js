import React from 'react ';

const ValidateEmail = email => {
  let mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (!email.match(mailformat)) {
    return false;
  }
  return true;
};

export const settingUpAuth = OBJ => {
  const {_id, age, email, contactNo, fullName} = OBJ.data.data.user;
  data = {
    auth: true,
    token: OBJ.data.token,
    id: _id,
    age,
    email,
    contactNo,
    fullName,
  };
  return data;
};
