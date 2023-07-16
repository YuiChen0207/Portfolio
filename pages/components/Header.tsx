import React from "react";
import config from "../index.json";

const Header = () => {
  const navigation = config.navigation;
  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-8 lg:px-32 py-4">
        <ul className="flex items-center justify-center space-x-8">
          {navigation.map((item) => (
            <li key={item.title}>
              <a
                href={`#${item.title}`}
                className="text-white font-semibold text-lg hover:text-gray-300 transition-colors duration-300"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
