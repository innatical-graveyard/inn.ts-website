import { NavLink, useLocation } from "react-router-dom";
//@ts-ignore
import Head from "@innatical/inn.ts/head";

const pages = [
  {
    title: "Home",
    link: "/docs",
  },
  {
    title: "Routing",
    link: "/docs/routing",
  },
  {
    title: "Head",
    link: "/docs/head",
  },
  {
    title: "Using MDX",
    link: "/docs/mdx",
  },
  {
    title: "Deploying",
    link: "/docs/deploying",
  },
  {
    title: "Examples",
    link: "/docs/examples",
  },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="w-64 h-screen p-5 bg-secondary dark:bg-secondary-dark flex-shrink-0">
      <h1 className="font-bold text-3xl mb-5">Inn.ts Docs</h1>
      <div className="flex flex-col gap-2">
        {pages.map((page) => (
          <>
            {page.link === location.pathname ? (
              <Head>
                <title>
                  {page.title === "Home" ? "Inn.ts Documentation" : page.title}
                </title>
              </Head>
            ) : (
              <></>
            )}
            <NavLink
              to={page.link}
              className="p-2 rounded-lg hover:bg-inndigo hover:text-white"
              activeClassName="bg-inndigo text-white"
              exact
            >
              {page.title}
            </NavLink>
          </>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
