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
    { name: "HTML", icon: <HtmlIcon sx={{ fontSize: "3rem" }} /> },
    { name: "Css", icon: <CssIcon sx={{ fontSize: "3rem" }} /> },
    { name: "Sass", icon: <AttachMoneyIcon sx={{ fontSize: "3rem" }} /> },
    { name: "Bootstrap", icon: <Looks5Icon sx={{ fontSize: "3rem" }} /> },
    {
      name: "JavaScript",
      icon: <JavascriptIcon sx={{ fontSize: "3rem" }} />,
    },
    { name: "React", icon: <FilterVintageIcon sx={{ fontSize: "3rem" }} /> },
    {
      name: "Responsive Design",
      icon: <TabletAndroidIcon sx={{ fontSize: "3rem" }} />,
    },
    { name: "Git", icon: <GitHubIcon sx={{ fontSize: "3rem" }} /> },
    { name: "node.js", icon: <HexagonIcon sx={{ fontSize: "3rem" }} /> },
  ];

  return (
    <div id="Skills" className="mx-auto my-10 max-w-2xl p-5">
      <Typography
        className="text-white"
        variant="h4"
        align="center"
        gutterBottom
      >
        MY SKILLS
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center mt-7">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="p-4 bg-white rounded-md hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center filter brightness-75">
                {skill.icon}
              </div>
              <p className="text-center mt-2">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
