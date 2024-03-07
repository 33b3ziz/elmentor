import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
// import LandingPage from "./pages/LandingPage";
import Mentor from "./pages/Mentor";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import SelectAvailable from "./pages/SelectAvailable";
import MentorSignup from "./pages/MentorSignup";
import StudentProfile from "./pages/StudentProfile";
import MentorProfile from "./pages/MentorProfile";
import Loader from "./components/Loader";

const LandingPage = lazy(() => import("./pages/LandingPage"));


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="mentor/:id" element={<Mentor />} />
                <Route path="/" element={<LandingPage />} />
                <Route index element={<Navigate replace to="/welcome" />} />
                <Route path="contact" element={<Contact />} />
                <Route path="/welcome" element={<LandingPage />} />
                <Route path="home" element={<Homepage />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="payment" element={<Payment />} />
                <Route path="studentprofile" element={<StudentProfile />} />
                <Route path="mentorprofile" element={<MentorProfile />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="sign-up/mentor" element={<MentorSignup />} />
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "white",
                color: "black",
              },
            }}
          />
        </ThemeProvider>
      </QueryClientProvider>
    </Suspense>
  );
};

export default App;
