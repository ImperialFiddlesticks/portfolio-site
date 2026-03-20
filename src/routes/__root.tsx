import Footer from "@/components/ui/Footer";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />;
      <Footer />
    </>
  );
}
