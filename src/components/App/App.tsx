import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllPosts from '../AllPostsPage/AllPosts/AllPosts';
import AllPostsPage from '../AllPostsPage/AllPostsPage';
import PostInfo from '../PostInfo/PostInfo';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AllPostsPage />} />
      <Route path="/:id" element={<PostInfo />} />
    </Routes>
  );
};

export default App;
