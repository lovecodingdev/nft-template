import store from "@/state/store";

export default [
  {
    path: "/",
    meta: {},
    name: "home",
    component: () => import("@/pages/home/index"),
  },
  {
    path: "/mint",
    meta: {},
    name: "mint",
    component: () => import("@/pages/mint/index"),
  },
  {
    path: "/raffle",
    meta: {},
    name: "raffle",
    component: () => import("@/pages/raffle/index"),
  },
  {
    path: "/success",
    meta: {},
    name: "success",
    component: () => import("@/pages/success/index"),
  }
];
