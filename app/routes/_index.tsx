import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import globalStyles from "~/styles/global.css";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStyles }];
};

export default function Index() {
  return (
    <div></div>
  );
}
