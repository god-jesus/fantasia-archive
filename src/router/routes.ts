import { RouteConfig } from "vue-router"
import MainLayout from "layouts/MainLayout.vue"
import ProjectManagentLayout from "layouts/ProjectManagentLayout.vue"

const routes: RouteConfig[] = [
  {
    path: "/",
    component: ProjectManagentLayout,
    children: [
      { path: "", component: () => import("pages/WelcomeScreen.vue") }
    ]
  },
  {
    path: "/project",
    component: MainLayout,
    children: [
      { path: "/project", component: () => import("pages/ProjectScreen.vue") },
      { path: "/project/display-content/:type/:id", component: () => import("pages/DocumentDisplay.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
]

export default routes
