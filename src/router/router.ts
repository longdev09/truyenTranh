import Detail from "../page/Detail";
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
  {
    path: "/truyen-tranh/:id_manga",
    component: Detail,
  },
];

export default router;
