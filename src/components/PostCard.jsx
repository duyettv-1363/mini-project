import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function PostCard({ post }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 m-4 max-w-2xl mx-auto hover:shadow-md transition">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{ post.title }</h2>
      <p className="text-sm text-gray-500 mb-4"><small className="font-medium">{t('author_label')}: {post.author} - {t('date_label')}: {post.date}</small></p>
      <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
      <Link to={`/post/${post.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">{t('read_more')}</Link>
    </div>
  );
}

export default PostCard;
