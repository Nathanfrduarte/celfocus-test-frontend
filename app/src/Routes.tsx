import {
  BrowserRouter,
  Routes as AppRoutes,
  Route,
  Navigate,
} from "react-router-dom";
import CompanyDetais from "./pages/CompanyDetailsPage/CompanyDetails.page";
import HomePage from "./pages/HomePage/Home.page";
import PhoneDetails from "./pages/PhoneDetailsPage/PhoneDetails.page";

function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <AppRoutes>
        <Route path="/numbers/:numberId" element={<PhoneDetails />} />
        <Route path="/companies/:companyId" element={<CompanyDetais />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </AppRoutes>
    </BrowserRouter>
  );
}

export default Routes;
