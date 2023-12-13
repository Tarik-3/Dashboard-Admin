import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./page/dashboard/Dashboard";
import Team from "./page/team/Team";
// @ts-ignore
import Invoices from "./page/invoices/Invoices";
import Form from "./page/form/Form";
import Calendar from "./page/calendar/Calendar";
import FAQ from "./page/faq/FAQ";
import BarChart from "./page/barChart/BarChart";
import PieChart from "./page/pieChart/PieChart";
import LineChart from "./page/lineChart/LineChart";
import NotFound from "./page/notFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <
// @ts-ignore
    Route path="/" element={<App />}>
      <
// @ts-ignore
      Route index element={<Dashboard />} />
      <
// @ts-ignore
      Route path="team" element={<Team />} />
      <
// @ts-ignore
      Route path="form" element={<Form />} />
      <
// @ts-ignore
      Route path="calendar" element={<Calendar />} />
      <
// @ts-ignore
      Route path="faq" element={<FAQ />} />

      <
// @ts-ignore
      Route path="bar" element={<BarChart />} />
      <
// @ts-ignore
      Route path="pie" element={<PieChart />} />
      <
// @ts-ignore
      Route path="line" element={<LineChart />} />



      <
// @ts-ignore
      Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <
// @ts-ignore
  React.StrictMode>
    <
// @ts-ignore
    RouterProvider router={router} />
  </React.StrictMode>
);
