import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import NewPostPage from "./pages/NewPostPage";
import AboutPage from "./pages/AboutPage";
import { useTranslation } from 'react-i18next';
import EditPostPage from "./pages/EditPostPage";
import { ThemeProvider } from './context/ThemeContext';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addNewPost, updatePost, deletePost } from './redux/postsSlice';

function App() {
  const dispatch = useDispatch();
  const { items: posts, loading, error } = useSelector(state => state.posts);
  const { t } = useTranslation();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  const addPost = (post) => {
    dispatch(addNewPost(post));
  };

  const handleUpdatePost = (post) => {
    dispatch(updatePost(post));
  };

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Header title={t('my_awesome_blog')} />

        <main className="py-8 px-4">
          <Routes>
            <Route path="/" element={<HomePage posts={posts} />} />
            <Route path="/post/:id" element={<PostDetailPage posts={posts} onDeletePost={handleDeletePost} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/new-post" element={<NewPostPage onAddPost={addPost} />} />
            <Route path="/edit-post/:id" element={<EditPostPage posts={posts} onUpdatePost={handleUpdatePost} />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}
export default App
