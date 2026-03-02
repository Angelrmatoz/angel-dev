import { redirect } from "next/navigation";

// This page only renders when the app is built statically or
// if the proxy doesn't catch the root path.
// It redirects to the default locale.
export default function RootPage() {
  redirect("/es");
}
