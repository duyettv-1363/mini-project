import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function PostDetailPage({ posts, onDeletePost }) {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div className="text-center text-xl mt-10">{t('post_not_found')}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 shadow-sm rounded-lg mt-10 transition-colors duration-200">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">← {t('back_to_home')}</Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-500 mb-6 border-b pb-4">
        {t('author_label')} {post.author} | {t('date_label')} {post.date}
      </div>
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
        {post.content}
      </div>
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => navigate(`/edit-post/${post.id}`)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {t('edit_post')}
        </button>

        <button
          onClick={() => {
            if (window.confirm(t('confirm_delete') || 'Bạn có chắc muốn xóa bài viết này?')) {
              onDeletePost(post.id);
              navigate('/');
            }
          }}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          {t('delete_post')}
        </button>
      </div>
    </div>
  );
}

export default PostDetailPage;
