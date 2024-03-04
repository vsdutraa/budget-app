// rrd imports
import { redirect } from "react-router-dom";

// helpers functions
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // delete the user
  deleteItem("userName");

  // return redirect
  return redirect("/");
}
