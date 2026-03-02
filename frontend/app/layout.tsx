import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Since we have a `[locale]` dynamic segment, a root layout file
// is required by Next.js even if it's just a 'passthrough'.
export default function RootLayout({ children }: Props) {
  return children;
}
