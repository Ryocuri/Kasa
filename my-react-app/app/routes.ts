import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/logement/:id", "routes/logement.tsx"),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
