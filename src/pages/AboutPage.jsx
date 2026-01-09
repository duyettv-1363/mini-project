import { useTranslation } from 'react-i18next';
function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="text-center text-2xl mt-10">
      {t('about_page_title')}
    </div>
  );
}

export default AboutPage;
