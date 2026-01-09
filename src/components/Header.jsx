import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useTheme } from '../context/ThemeContext';

function Header(props) {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className="bg-slate-800 text-white p-6 flex shadow-md text-center">
      <h1 className="text-3xl font-bold mb-2">{props.title}</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-blue-400 transition">{t('home')}</Link>
        <Link to="/about" className="hover:text-blue-400 transition">{t('about')}</Link>
      </nav>
      <nav className="ml-auto space-x-2 flex items-center">
        <button className="rounded-lg bg-emerald-500 px-4 py-2 text-white font-semibold hover:bg-green-700 transition" onClick={() => i18n.changeLanguage('vi')}>🇻🇳 VI</button>
        <button className="rounded-lg bg-emerald-500 px-4 py-2 text-white font-semibold hover:bg-green-700 transition" onClick={() => i18n.changeLanguage('en')}>🇬🇧 EN</button>
        <button
          onClick={toggleTheme}
          className="ml-2 p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition focus:outline-none"
          title="Toggle Theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  );
}
export default Header;
