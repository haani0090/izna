let firebaseConfig = {
  apiKey: "AIzaSyA6Vkf95WXOGYYidTLCgePx5HKA-G3iPOc",
    authDomain: "izna-blog-7e065.firebaseapp.com",
    projectId: "izna-blog-7e065",
    storageBucket: "izna-blog-7e065.appspot.com",
    messagingSenderId: "449352764312",
    appId: "1:449352764312:web:8f4034da9f097f1625b9ed"
  };

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = ()=>{
auth.signOut();
location.reload();
}