import PostForm from "../components/PostForm";
import { useTranslation } from 'react-i18next'; 

function NewPostPage({ onAddPost }) {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-6">{t('create_new_post')}</h1>
      <PostForm onSavePost={onAddPost} />
    </div>
  );
}

export default NewPostPage;
