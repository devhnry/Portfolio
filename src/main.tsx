import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from "./App.tsx";
import {GrainOverlay} from "./components/GrainOverlay.tsx";
import CustomCursor from "./components/customCursor/CustomCursor.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
      <GrainOverlay />
    <CustomCursor />
  </StrictMode>,
)
