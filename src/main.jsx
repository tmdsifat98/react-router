import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root.jsx";
import Laptop from "./Components/Laptop.jsx";
import Home from "./Components/Home.jsx";
import Headphone from "./Components/Headphone.jsx";
import { StrictMode, Suspense } from "react";
import Users from "./Components/Users.jsx";
import UserDetails from "./Components/UserDetails.jsx";
import Posts from "./Components/Posts.jsx";
import PostDetails from "./Components/PostDetails.jsx";
const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
const postPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "laptop", Component: Laptop },
      { path: "headphone", Component: Headphone },
      {
        path: "users",
        element: (
          <Suspense
            fallback={
              <span className="loading loading-spinner text-warning"></span>
            }
          >
            <Users userPromise={userPromise}></Users>
          </Suspense>
        ),
      },
      {
        path: "users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path: "posts",
        element: (
          <Suspense
            fallback={
              <span className="loading loading-spinner text-secondary"></span>
            }
          >
            <Posts postPromise={postPromise}></Posts>
          </Suspense>
        ),
      },
      {
        path: "posts/:postId",
        loader: ({params}) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
