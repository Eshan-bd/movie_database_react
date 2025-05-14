// components/Layout.js
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
