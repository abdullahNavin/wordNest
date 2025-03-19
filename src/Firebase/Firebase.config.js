
// // import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)




import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfkvOejj5bgHW-mjXSEjyYvoMb8bqGjXY",
  authDomain: "wordnest-6e2a6.firebaseapp.com",
  projectId: "wordnest-6e2a6",
  storageBucket: "wordnest-6e2a6.firebasestorage.app",
  messagingSenderId: "93167700815",
  appId: "1:93167700815:web:b6c03b694a05c6f84dd33a"
};

export const app = initializeApp(firebaseConfig);
