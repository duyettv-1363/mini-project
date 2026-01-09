import PostCard from "../components/PostCard";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function HomePage({ posts }) {  
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{t('post_list')}</h2>
      <Link 
        to="/new-post" 
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        {t('create_new_post')}
      </Link>
      {posts.map(item => <PostCard key={item.id} post={item} />)}
    </div>
  );
}

export default HomePage;
