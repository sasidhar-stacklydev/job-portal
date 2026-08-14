import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SavedJobs from "./pages/SavedJobs";
import ApplyJob from "./pages/ApplyJob";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Companies from "./pages/Companies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import Categories from "./pages/categories/Categories";
import FrontendJobs from "./pages/categories/FrontendJobs";
import BackendJobs from "./pages/categories/BackendJobs";
import DevOpsJobs from "./pages/categories/DevOpsJobs";

function App() {
  return (
    <>
      <Navbar />

      <main className="page-container">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/jobs" element={<Jobs />}>

            <Route
              path="categories"
              element={<Categories />}
            />

            <Route
              path="categories/frontend"
              element={<FrontendJobs />}
            />

            <Route
              path="categories/backend"
              element={<BackendJobs />}
            />

            <Route
              path="categories/devops"
              element={<DevOpsJobs />}
            />

          </Route>

          <Route
            path="/jobs/:jobId"
            element={<JobDetails />}
          />

          <Route
            path="/jobs/:jobId/apply"
            element={<ApplyJob />}
          />

          <Route
            path="/saved-jobs"
            element={<SavedJobs />}
          />

          <Route
            path="/companies"
            element={<Companies />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </main>
      <Footer/>
    </>
  );
}

export default App;