import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import Pagination from '../common/Pagination/Pagination';
import AllPosts from './AllPosts/AllPosts';
import SortedAllPost from './SortedAllPost/SortedAllPost';
import SortPosts from './SortPosts/SortPosts';

const AllPostsPage: React.FC = () => {
  const { isSearch } = useAppSelector((state) => state.post);

  return (
    <main>
      <SortPosts />
      {isSearch ? <SortedAllPost /> : <AllPosts />}
      <Pagination />
    </main>
  );
};

export default AllPostsPage;
