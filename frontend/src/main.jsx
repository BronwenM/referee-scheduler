import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth.jsx";
import { ModalProvider } from "./hooks/useModal.jsx";
import { UserDataProvider} from './hooks/useUserData.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ModalProvider>
          <UserDataProvider>
            <App />
          </UserDataProvider>
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
