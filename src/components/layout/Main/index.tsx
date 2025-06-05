import type { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
