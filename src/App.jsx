import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DynamicImport from "./pages/DynamicImport";
import ImportOnVisibility from "./pages/ImportOnVisibility";
import ListVirtualization from "./pages/ListVirtualization";
import BlogDetail from "./pages/BlogDetail";
import Cache from "./pages/Cache";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <div>
              <ul className="navbar-nav d-flex flex-row gap-4">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dynamic-import">
                    Dynamic Import
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/import-on-visibility">
                  Import On Visibility
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/list-virtualization">
                  List Virtualization
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cache">
                  Cache
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dynamic-import" element={<DynamicImport />} />
          <Route path="/import-on-visibility" element={<ImportOnVisibility />} />
          <Route path="/list-virtualization" element={<ListVirtualization />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/cache" element={<Cache />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
