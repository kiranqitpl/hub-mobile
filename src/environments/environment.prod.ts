export const environment = {
  production: true,
  type: 1,   // type = 0=>all 1=>unread  2=>read  notification
  allType: 0, // type = 0=>all 1=> unread 2=> read notification
  imageUrl: './assets/',
  API_URL: 'https://mforms-api-live.horts.com.au/api/',

  //-------------------------------------------- Validators pattern ---------------------------------------------//

  alphabet: /^[A-Z.a-z ]+[A-Za-z]+$/,
  alphaNumeric: /^[a-zA-Z0-9]{10}$/,
  numeric: /^[0-9]/,
  url: /^(ftp|http|https):\/\/[^ "]+$/

  //--------------------------------------------- Validators pattern --------------------------------------------//
};


