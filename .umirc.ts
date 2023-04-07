import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index",  name: "home"  },
    { path: "/docs", component: "docs" , name: "docs"},
    { path: "/products", component: "products" , name: "products" },
  ],
  plugins: ['@umijs/plugins/dist/react-query'],
  reactQuery: {},
  npmClient: 'pnpm',
});
