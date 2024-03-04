// rrd imports
import { useLoaderData } from "react-router-dom";

// helper functions
import { fetchData } from "../helpers";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();

  return <div>{userName && <h1>Hello, {userName}</h1>}</div>;
};

export default Dashboard;
