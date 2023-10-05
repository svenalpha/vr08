import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
function multiply(a, b) {
  return a * b;
}
function multiplyAndAdd(a, b, c) {
  return add(multiply(a, b), c);
}
function add(a, b) {
  return a + b;
}
function addAndMultiply(a, b, c) {
  return multiply(add(a, b), c);
}
const app = "";
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "About" }),
    /* @__PURE__ */ jsx("h4", { className: "strClass", children: "inside change no.  21 express installed globally" })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
function Env() {
  let msg = "default message here Env No1111 113:37";
  try {
    msg = process.env.MY_CUSTOM_SECRET || msg;
  } catch {
  }
  return /* @__PURE__ */ jsx("h1", { children: msg });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Env
}, Symbol.toStringTag, { value: "Module" }));
const url = "https://api.github.com/users";
const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users2 = await response.json();
    setUsers(users2);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h3", { children: "github users" }),
    /* @__PURE__ */ jsx("ul", { className: "users", children: users.map((user) => {
      const { id, login, avatar_url, html_url } = user;
      return /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("img", { src: avatar_url, alt: login }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { children: login }),
          /* @__PURE__ */ jsx("a", { href: html_url, className: "strClass", children: "profile" })
        ] })
      ] }, id);
    }) })
  ] });
};
function Extra() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Extra" }),
    /* @__PURE__ */ jsx(UseEffectFetchData, {}),
    /* @__PURE__ */ jsx("div", { children: addAndMultiply(1, 2, 3) }),
    /* @__PURE__ */ jsx("div", { children: multiplyAndAdd(1, 2, 3) })
  ] });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Extra
}, Symbol.toStringTag, { value: "Module" }));
function Home() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("h1", { children: "Home no1 add,multiply removed  14:08" }) });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const pages = /* @__PURE__ */ Object.assign({ "./pages/About.jsx": __vite_glob_0_0, "./pages/Env.jsx": __vite_glob_0_1, "./pages/Extra.jsx": __vite_glob_0_2, "./pages/Home.jsx": __vite_glob_0_3 });
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: pages[path].default
  };
});
function App() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { children: routes.map(({ name, path }) => {
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: path, children: name }) }, path);
    }) }) }),
    /* @__PURE__ */ jsx(Routes, { children: routes.map(({ path, component: RouteComp }) => {
      return /* @__PURE__ */ jsx(Route, { path, element: /* @__PURE__ */ jsx(RouteComp, {}) }, path);
    }) })
  ] });
}
function render(url2, context) {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url2, context, basename: "/vr08.onrender.com", children: /* @__PURE__ */ jsx(App, {}) })
  );
}
export {
  render
};
