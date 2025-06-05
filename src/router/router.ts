import Home from "../page/Home";

interface RouteConfig {
  path: string;
  component: React.FC;
  layout?: React.FC | null;
}

const router: RouteConfig[] = [
  {
    path: "/",
    component: Home,
  },
];

export default router;
