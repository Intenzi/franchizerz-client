import { useEffect } from "react";
import { Routes, Route, Navigate, useMatch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import HomePage from "./components/HomePage/HomePage";
import Franchise from "./components/Franchise/Franchise";
import ContactForm from "./components/Contact/ContactForm";
import NewsSection from "./components/Blog/NewsSection";
import PartnerWithUs from "./components/PartnerWithUs/PartnerWithUs";
import Newnav from "./components/newnav/Newnav";
import LoadingSpinner from "./components/LoadingSpinner";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { data } from "./data/db_new";
import Appp from "./components/login/src/Appp";

// Component to protect routes for authenticated and verified users
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user?.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

// Component to redirect authenticated users from login/signup
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.isVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  const { isCheckingAuth, checkAuth, isAuthenticated } = useAuthStore();
  const match = useMatch("/franchise/:id");
  const franchise = match ? data.find((franchise) => franchise.id === Number(match.params.id)) : null;

  useEffect(() => {
    checkAuth(); // Check authentication state on initial load
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />; // Show spinner while checking auth

  return (
    <>
      <Newnav />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/franchise/:id" element={<Franchise franchise={franchise} />} />
          <Route path="/blog" element={<NewsSection />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />

          {/* Protected Dashboard Route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <div className="auth-page">
                  <DashboardPage />
                </div>
              </ProtectedRoute>
            }
          />

          {/* Authentication Pages */}
          <Route
            path="/signup"
            element={
              <RedirectAuthenticatedUser>
                <div className="auth-page">
                  <SignUpPage />
                </div>
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/login"
            element={
              <RedirectAuthenticatedUser>
                <div className="auth-page">
                  <LoginPage />
                </div>
              </RedirectAuthenticatedUser>
            }
          />
          <Route path="/verify-email" element={<div className="auth-page"><EmailVerificationPage /></div>} />
          <Route
            path="/forgot-password"
            element={
              <RedirectAuthenticatedUser>
                <div className="auth-page">
                  <ForgotPasswordPage />
                </div>
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/reset-password/:token"
            element={
              <RedirectAuthenticatedUser>
                <div className="auth-page">
                  <ResetPasswordPage />
                </div>
              </RedirectAuthenticatedUser>
            }
          />
          <Route path="/login-app" element={<Appp />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </div>
      <Footer />
    </>
  );
};

export default App;
