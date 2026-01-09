import { useState, useEffect } from 'react';
//import { initialPosts } from '../data/initialPosts';

// export function usePosts() {
//   const [posts, setPosts] = useState(() => {
//     const saved = localStorage.getItem('blog_posts');
//     return saved ? JSON.parse(saved) : initialPosts;
//   });

//   useEffect(() => {
//     localStorage.setItem('blog_posts', JSON.stringify(posts));
//   }, [posts]);

//   const addPost = (post) => {
//     setPosts([post, ...posts]);
//   };

//   const handleUpdatePost = (updatedPost) => {
//     setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
//   };

//   const handleDeletePost = (postId) => {
//     setPosts(posts.filter(p => p.id !== postId));
//   };

//   return { posts, addPost, handleUpdatePost, handleDeletePost };
// }

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        
        if (!response.ok) {
          throw new Error('Lỗi khi tải dữ liệu');
        }

        const data = await response.json();
        const formattedData = data.map(post => ({
            ...post,
            content: post.body,
            date: new Date().toISOString().split('T')[0]
        }));

        setPosts(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDeletePost = async (postId) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
      });
      
      setPosts(posts.filter(p => p.id !== postId));
      setPosts(posts.filter(p => p.id !== postId));
    } catch (err) {
      alert("Không thể xóa bài viết: " + err.message);
    }
  };

  const addPost = async (newPost) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      
      setPosts([data, ...posts]); 
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdatePost = async (updatedPost) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedPost),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      
      setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
    } catch (err) {
      alert("Không thể cập nhật bài viết: " + err.message);
    }
  };

  return { posts, loading, error, addPost, handleUpdatePost, handleDeletePost };
}
