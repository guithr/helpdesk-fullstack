import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../contexts/auth/AuthContext";
import { AuthRoutes } from "./auth-routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
