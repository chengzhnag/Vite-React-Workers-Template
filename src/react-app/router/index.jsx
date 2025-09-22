import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// 使用lazy加载实现代码分割
const Entry = lazy(() => import("../views/Entry"));
const Login = lazy(() => import("../views/Login"));

// 加载组件
const LoadingComponent = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '16px',
    color: '#666'
  }}>
    加载中...
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <Entry />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <Login />
      </Suspense>
    ),
  },
]);

export default router;