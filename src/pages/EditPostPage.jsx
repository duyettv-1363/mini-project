import { useParams } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { useTranslation } from 'react-i18next';

function EditPostPage({ posts, onUpdatePost }) {
  const { id } = useParams();
  const { t } = useTranslation();
  const postToEdit = posts.find(p => p.id === parseInt(id));

  if (!postToEdit) {
    return <div>{t('post_not_found')}</div>;
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-6">{t('edit_post')}</h1>
      <PostForm 
        initialData={postToEdit} 
        onSavePost={onUpdatePost} 
      />
    </div>
  );
}

export default EditPostPage;
