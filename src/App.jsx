import React, { useState } from "react";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Home,
  Calendar,
  Info,
  Map,
  Book,
  ShoppingBag,
} from "lucide-react";
import HomePage from "./pages/HomePage";
import WhyBuyLocalPage from "./pages/WhyBuyLocalPage";
import LocalBusinessesPage from "./pages/LocalBusinessesPage";
import FoodHubsPage from "./pages/FoodHubsPage";
import HarvestChartPage from "./pages/HarvestChartPage";
import FactsPage from "./pages/InterestingFacts";
import AllFarmsPage from "./pages/AllFarmsPage";
import ProductLabelsPage from "./pages/ProductLabelsPage";

// Main App Component
const App = () => {
  const [activePage, setActivePage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Map pages to their components
  const pageComponents = {
    home: <HomePage />,
    "why-buy-local": <WhyBuyLocalPage />,
    "local-businesses": <LocalBusinessesPage />,
    "food-hubs": <FoodHubsPage />,
    "harvest-chart": <HarvestChartPage />,
    "interesting-facts": <FactsPage />,
    "all-farms": <AllFarmsPage />,
    "product-labels": <ProductLabelsPage />,
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="bg-green-700 text-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8" />
              <h1 className="text-2xl font-bold">NL Local Community Hub</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <NavLink
                active={activePage === "home"}
                onClick={() => setActivePage("home")}
              >
                <Home className="h-4 w-4 mr-1" />
                Home
              </NavLink>
              <NavLink
                active={activePage === "why-buy-local"}
                onClick={() => setActivePage("why-buy-local")}
              >
                <Info className="h-4 w-4 mr-1" />
                Why Buy Local
              </NavLink>
              <NavLink
                active={activePage === "local-businesses"}
                onClick={() => setActivePage("local-businesses")}
              >
                <ShoppingBag className="h-4 w-4 mr-1" />
                Local Businesses
              </NavLink>
              <NavLink
                active={activePage === "food-hubs"}
                onClick={() => setActivePage("food-hubs")}
              >
                <Map className="h-4 w-4 mr-1" />
                Food Hubs & Markets
              </NavLink>
              <DropdownMenu
                title="Resources"
                items={[
                  { id: "harvest-chart", label: "Harvest Chart" },
                  { id: "interesting-facts", label: "Interesting Facts" },
                  { id: "all-farms", label: "NL Farms Directory" },
                  { id: "product-labels", label: "Canadian Product Labels" },
                ]}
                activePage={activePage}
                setActivePage={setActivePage}
              />
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-3">
                <MobileNavLink
                  onClick={() => {
                    setActivePage("home");
                    setMobileMenuOpen(false);
                  }}
                >
                  Home
                </MobileNavLink>
                <MobileNavLink
                  onClick={() => {
                    setActivePage("why-buy-local");
                    setMobileMenuOpen(false);
                  }}
                >
                  Why Buy Local
                </MobileNavLink>
                <MobileNavLink
                  onClick={() => {
                    setActivePage("local-businesses");
                    setMobileMenuOpen(false);
                  }}
                >
                  Local Businesses
                </MobileNavLink>
                <MobileNavLink
                  onClick={() => {
                    setActivePage("food-hubs");
                    setMobileMenuOpen(false);
                  }}
                >
                  Food Hubs & Markets
                </MobileNavLink>
                <MobileNavLink
                  onClick={() => {
                    setActivePage("harvest-chart");
                    setMobileMenuOpen(false);
                  }}
                >
                  Harvest Chart
                </MobileNavLink>
                <MobileNavLink
                  onClick={() => {
                    setActivePage("interesting-facts");
                    setMobileMenuOpen(false);
                  }}
                >
                  Interesting Facts
                </MobileNavLink>
                <MobileNavLink
                  onClick={() => {
                    setActivePage("all-farms");
                    setMobileMenuOpen(false);
                  }}
                >
                  NL Farms Directory
                </MobileNavLink>
                <MobileNavLink
                  onClick={() => {
                    setActivePage("product-labels");
                    setMobileMenuOpen(false);
                  }}
                >
                  Canadian Product Labels
                </MobileNavLink>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{pageComponents[activePage]}</main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">About Us</h3>
              <p className="text-sm">
                NL Local Community Hub is a non-profit organization dedicated to
                promoting local businesses, agriculture, and sustainable food
                practices in Newfoundland and Labrador.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <p className="text-sm">Email: info@nlcommunityhub.org</p>
              <p className="text-sm">Phone: (709) 555-1234</p>
              <p className="text-sm">
                Address: 123 Water Street, St. John's, NL
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-green-200">
                  Facebook
                </a>
                <a href="#" className="text-white hover:text-green-200">
                  Twitter
                </a>
                <a href="#" className="text-white hover:text-green-200">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-green-600 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} NL Local Community Hub. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Navigation Components
const NavLink = ({ children, active, onClick }) => (
  <button
    className={`flex items-center px-2 py-1 rounded ${
      active ? "bg-green-800" : "hover:bg-green-600"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const MobileNavLink = ({ children, onClick }) => (
  <button
    className="block w-full text-left px-4 py-2 hover:bg-green-600 rounded"
    onClick={onClick}
  >
    {children}
  </button>
);

const DropdownMenu = ({ title, items, activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center px-2 py-1 hover:bg-green-600 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Book className="h-4 w-4 mr-1" />
        {title}
        {isOpen ? (
          <ChevronDown className="h-4 w-4 ml-1" />
        ) : (
          <ChevronRight className="h-4 w-4 ml-1" />
        )}
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800">
          {items.map((item) => (
            <button
              key={item.id}
              className={`block w-full text-left px-4 py-2 text-sm ${
                activePage === item.id ? "bg-green-100" : "hover:bg-gray-100"
              }`}
              onClick={() => {
                setActivePage(item.id);
                setIsOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
