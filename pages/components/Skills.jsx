import React from "react";
import { Typography } from "@mui/material";
import HtmlIcon from "@mui/icons-material/Html";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import GitHubIcon from "@mui/icons-material/GitHub";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Looks5Icon from "@mui/icons-material/Looks5";
import HexagonIcon from "@mui/icons-material/Hexagon";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: <HtmlIcon sx={{ fontSize: "3rem" }} />,
      color: "#F44336",
    },
    {
      name: "CSS",
      icon: <CssIcon sx={{ fontSize: "3rem" }} />,
      color: "#3F51B5",
    },
    {
      name: "Sass",
      icon: <AttachMoneyIcon sx={{ fontSize: "3rem" }} />,
      color: "#FF9800",
    },
    {
      name: "Bootstrap",
      icon: <Looks5Icon sx={{ fontSize: "3rem" }} />,
      color: "#4CAF50",
    },
    {
      name: "JavaScript",
      icon: <JavascriptIcon sx={{ fontSize: "3rem" }} />,
      color: "#FFEB3B",
    },
    {
      name: "React",
      icon: <FilterVintageIcon sx={{ fontSize: "3rem" }} />,
      color: "#03A9F4",
    },
    {
      name: "Responsive Design",
      icon: <TabletAndroidIcon sx={{ fontSize: "3rem" }} />,
      color: "#9C27B0",
    },
    {
      name: "Git",
      icon: <GitHubIcon sx={{ fontSize: "3rem" }} />,
      color: "#607D8B",
    },
    {
      name: "Node.js",
      icon: <HexagonIcon sx={{ fontSize: "3rem" }} />,
      color: "#795548",
    },
  ];

  return (
    <div id="Skills" className="mx-auto mb-10 max-w-2xl">
      <h1 className="pt-12 uppercase font-bold text-center text-white text-4xl">
        MY SKILLS
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 justify-center pt-8">
        {skills.map((skill) => (
          <div key={skill.name} className="text-center">
            <div className="p-6 bg-gradient-to-r from-white to-gray-200 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              <div
                className="flex items-center justify-center filter brightness-75 mb-4"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <Typography
                className="text-black text-lg font-semibold"
                variant="body1"
              >
                {skill.name}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
