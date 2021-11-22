import { createNavbar } from "./navbar";
import { createHome } from "./home";
import { createMenu } from "./menu";

const contentContainer = document.querySelector('#content');


contentContainer.appendChild(createNavbar());
contentContainer.appendChild(createHome());
contentContainer.appendChild(createMenu());







