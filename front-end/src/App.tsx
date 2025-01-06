import { useRoutes } from 'react-router-dom';
import { useSelector } from './store/Store';
import { ThemeSettings } from './theme/Theme';
import RTL from './layouts/full/shared/customizer/RTL';
import ScrollToTop from './components/shared/ScrollToTop';
import Router from './routes/Router';
import { AppState } from './store/Store';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AuthProvider from './authentication/AuthProvider';
import MatomoTracker from './components/matomo-tracker/MatomoTracker';
import { useMediaQuery } from '@mui/material';
import PageContainer from './components/container/PageContainer';
import Footer from './components/landingpage/footer/Footer';
import { useTranslation } from 'react-i18next';

function App() {
  const routing = useRoutes(Router);
  const theme = ThemeSettings();
  const customizer = useSelector((state: AppState) => state.customizer);
  const isMobile = useMediaQuery('(max-width:768px)'); // Detect if the device is mobile
  const { t } = useTranslation();

  // Rendering for the whole site, without device restrictions
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <RTL direction={customizer.activeDir}>
          <CssBaseline />
          <MatomoTracker />
          <ScrollToTop>{routing}</ScrollToTop>
        </RTL>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
