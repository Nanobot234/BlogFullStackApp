import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {initializeApp} from 'firebase/app';



const firebaseConfig = {
  apiKey: "AIzaSyBZHOZT1TOaSPt2sO2jzQwsdW1EG-mZIBQ",
  authDomain: "full-stack-reapp.firebaseapp.com",
  projectId: "full-stack-reapp",
  storageBucket: "full-stack-reapp.firebasestorage.app",
  messagingSenderId: "417902612759",
  appId: "1:417902612759:web:0851255b0ec42a2b186752"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
