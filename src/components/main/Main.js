import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const NewsPage = lazy(() => import("../../pages/newsPage/NewsPage.js"));
const ProfilePage = lazy(() =>
  import("../../pages/profilePage/ProfilePage.js")
);

const Main = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<NewsPage />} restricted />
        <Route
          path="/profile/:uniqueId"
          element={<ProfilePage />}
          redirectTo="/"
        />
      </Routes>
    </Suspense>
  );
};

export default Main;
