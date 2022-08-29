import { createWebHistory, createRouter } from "vue-router";
import ListView from "./components/ListView.vue";
import HomeView from "./components/HomeView.vue";
import DetailView from "./components/DetailView.vue";
import AuthorView from "./components/AuthorView.vue";
import CommentView from "./components/CommentView.vue";

const routes = [
  {
    path: "/detailView/:id",
    component: DetailView,
    children: [
      {
        path: "authorView",
        component: AuthorView,
      },
      {
        path: "commentView",
        component: CommentView,
      },
    ],
  },
  {
    path: "/listView",
    component: ListView,
  },
  {
    path: "/",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
