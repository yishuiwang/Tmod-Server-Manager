import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import NotFound from "../pages/404/page404";
import Conf from "../pages/conf/conf";
import Home from "../pages/home/home";
import AppLayout from "./AppLayout";

export default function View() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />}></Route>
          <Route
            path="/home"
            element={
              <AppLayout>
                <Home />
              </AppLayout>
            }
          ></Route>
          <Route
            path="/conf"
            element={
              <AppLayout>
                <Conf />
              </AppLayout>
            }
          ></Route>
          <Route path="/404" element={<NotFound></NotFound>} />
          <Route path="*" element={<Navigate to="/404" replace />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
