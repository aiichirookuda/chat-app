import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAB604DJwsbp0o7pvZ6nh1K3oIrQHlTJE8',
  authDomain: 'chat-55cce.firebaseapp.com',
  projectId: 'chat-55cce',
  storageBucket: 'chat-55cce.appspot.com',
  messagingSenderId: '851421799274',
  appId: '1:851421799274:web:ddc7bd047b0f20bb91bb13',
  measurementId: 'G-051QKFDJ9Y',
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
