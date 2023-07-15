/* eslint-disable no-console */
import React from "react";
import ReactDOM from "react-dom";
import browser from "webextension-polyfill";
import { ContentApp } from "./views/ContentApp";
import { ThemeProvider } from "@material-tailwind/react";

(() => {
  const scheduleTabButton = document.querySelector<HTMLInputElement>(
    "#ctl00_ContentPlaceHolder1_ctl00_rad_ThuTiet",
  );

  if (!scheduleTabButton?.checked) return;

  const container = document.createElement("div");
  const root = document.createElement("div");
  const styleEl = document.createElement("link");
  const shadowDOM =
    container.attachShadow?.({ mode: __DEV__ ? "open" : "closed" }) ||
    container;
  styleEl.setAttribute("rel", "stylesheet");
  styleEl.setAttribute(
    "href",
    browser.runtime.getURL("dist/contentScripts/style.css"),
  );
  shadowDOM.appendChild(styleEl);
  shadowDOM.appendChild(root);
  document.body.appendChild(container);

  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider>
        <ContentApp />
      </ThemeProvider>
    </React.StrictMode>,
    root,
  );
})();
