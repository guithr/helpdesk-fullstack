import { Route, Routes, Navigate } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { SignIn } from "../pages/Auth/SignIn";
import { SignUp } from "../pages/Auth/SignUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        {/* Redireciona "/" para "/signin" */}
        <Route index element={<Navigate to="signin" replace />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
