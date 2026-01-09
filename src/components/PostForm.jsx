import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function PostForm({ onSavePost, initialData }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    author: initialData?.author || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || ""
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        author: initialData.author,
        excerpt: initialData.excerpt,
        content: initialData.content
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      ...initialData,
      ...formData,
      id: initialData?.id || Date.now(),
      date: new Date().toLocaleDateString(),
    };

    onSavePost(postData);
    navigate("/");
  };

  return (
    <div className="mx-auto mt-10 max-w-2xl rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md transition-colors duration-200">

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder={t('title')}
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded border p-2 outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          required
        />

        <input
          name="author"
          placeholder={t('author')}
          value={formData.author}
          onChange={handleChange}
          className="w-full rounded border p-2 outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          required
        />

        <textarea
          name="excerpt"
          placeholder="Mô tả ngắn gọn"
          value={formData.excerpt}
          onChange={handleChange}
          className="w-full rounded border p-2 outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
        />

        <textarea
          name="content"
          placeholder={t('content')}
          value={formData.content}
          onChange={handleChange}
          className="w-full h-32 rounded border p-2 outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          required
        />

        <button
          type="submit"
          className="w-full rounded bg-green-600 py-3 text-white transition hover:bg-green-700"
        >
          {initialData?.id ? t('edit_post') : t('create_post')}
        </button>
      </form>
    </div>
  );
}

export default PostForm;
