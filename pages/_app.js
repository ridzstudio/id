import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import Routes from './Routes';
import ScrollToTop from './utils/ScrollToTop';
import './assets/base.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faFacebook,
  faTwitter,
  faVuejs,
  faReact,
  faHtml5,
  faGoogle,
  faInstagram,
  faPinterest,
  faYoutube,
  faDiscord,
  faSlack,
  faDribbble,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
  far,
  faSquare,
  faLifeRing,
  faCheckCircle,
  faTimesCircle,
  faDotCircle,
  faThumbsUp,
  faComments,
  faFolderOpen,
  faTrashAlt,
  faFileImage,
  faFileArchive,
  faCommentDots,
  faFolder,
  faKeyboard,
  faCalendarAlt,
  faEnvelope,
  faAddressCard,
  faMap,
  faObjectGroup,
  faImages,
  faUser,
  faLightbulb,
  faGem,
  faClock,
  faUserCircle,
  faQuestionCircle,
  faBuilding,
  faBell,
  faFileExcel,
  faFileAudio,
  faFileVideo,
  faFileWord,
  faFilePdf,
  faFileCode,
  faFileAlt,
  faEye,
  faChartBar
} from '@fortawesome/free-regular-svg-icons';
import {
  fas,
  faExclamation,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faCheck,
  faSmile,
  faHeart,
  faBatteryEmpty,
  faBatteryFull,
  faChevronRight,
  faSitemap,
  faPrint,
  faMapMarkedAlt,
  faTachometerAlt,
  faAlignCenter,
  faExternalLinkAlt,
  faShareSquare,
  faInfoCircle,
  faSync,
  faQuoteRight,
  faStarHalfAlt,
  faShapes,
  faCarBattery,
  faTable,
  faCubes,
  faPager,
  faCameraRetro,
  faBomb,
  faNetworkWired,
  faBusAlt,
  faBirthdayCake,
  faEyeDropper,
  faUnlockAlt,
  faDownload,
  faAward,
  faPlayCircle,
  faReply,
  faUpload,
  faBars,
  faEllipsisV,
  faSave,
  faSlidersH,
  faCaretRight,
  faChevronUp,
  faPlus,
  faLemon,
  faChevronLeft,
  faTimes,
  faChevronDown,
  faFilm,
  faSearch,
  faEllipsisH,
  faCog,
  faArrowsAltH,
  faPlusCircle,
  faAngleRight,
  faAngleUp,
  faAngleLeft,
  faAngleDown,
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faStar,
  faSignOutAlt,
  faLink
} from '@fortawesome/free-solid-svg-icons';
library.add(
  far,
  faSquare,
  faLifeRing,
  faCheckCircle,
  faTimesCircle,
  faDotCircle,
  faThumbsUp,
  faComments,
  faFolderOpen,
  faTrashAlt,
  faFileImage,
  faFileArchive,
  faCommentDots,
  faFolder,
  faKeyboard,
  faCalendarAlt,
  faEnvelope,
  faAddressCard,
  faMap,
  faObjectGroup,
  faImages,
  faUser,
  faLightbulb,
  faGem,
  faClock,
  faUserCircle,
  faQuestionCircle,
  faBuilding,
  faBell,
  faFileExcel,
  faFileAudio,
  faFileVideo,
  faFileWord,
  faFilePdf,
  faFileCode,
  faFileAlt,
  faEye,
  faChartBar
);
library.add(
  fab,
  faFacebook,
  faTwitter,
  faVuejs,
  faReact,
  faHtml5,
  faGoogle,
  faInstagram,
  faPinterest,
  faYoutube,
  faDiscord,
  faSlack,
  faDribbble,
  faGithub
);
library.add(
  fas,
  faExclamation,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faCheck,
  faSmile,
  faHeart,
  faBatteryEmpty,
  faBatteryFull,
  faChevronRight,
  faSitemap,
  faPrint,
  faMapMarkedAlt,
  faTachometerAlt,
  faAlignCenter,
  faExternalLinkAlt,
  faShareSquare,
  faInfoCircle,
  faSync,
  faQuoteRight,
  faStarHalfAlt,
  faShapes,
  faCarBattery,
  faTable,
  faCubes,
  faPager,
  faCameraRetro,
  faBomb,
  faNetworkWired,
  faBusAlt,
  faBirthdayCake,
  faEyeDropper,
  faUnlockAlt,
  faDownload,
  faAward,
  faPlayCircle,
  faReply,
  faUpload,
  faBars,
  faEllipsisV,
  faSave,
  faSlidersH,
  faCaretRight,
  faChevronUp,
  faPlus,
  faLemon,
  faChevronLeft,
  faTimes,
  faChevronDown,
  faFilm,
  faSearch,
  faEllipsisH,
  faCog,
  faArrowsAltH,
  faPlusCircle,
  faAngleRight,
  faAngleUp,
  faAngleLeft,
  faAngleDown,
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faStar,
  faSignOutAlt,
  faLink
);
const store = configureStore();

import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ClimbingBoxLoader } from 'react-spinners';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

// Layout Blueprints

import {
  LeftSidebar,
  CollapsedSidebar,
  MinimalLayout,
  PresentationLayout
} from './layout-blueprints';

// Example Pages

import WidgetsCountup from './example-pages/WidgetsCountup';
import FormsControls from './example-pages/FormsControls';
import FormsDualListbox from './example-pages/FormsDualListbox';
import FormsToggleSwitch from './example-pages/FormsToggleSwitch';
import PageError404 from './example-pages/PageError404';
import PageError500 from './example-pages/PageError500';
import PageError505 from './example-pages/PageError505';

const Overview = lazy(() => import('./example-pages/Overview'));
const DashboardMonitoring = lazy(() =>
  import('./example-pages/DashboardMonitoring')
);
const DashboardCommerce = lazy(() =>
  import('./example-pages/DashboardCommerce')
);
const DashboardAnalytics = lazy(() =>
  import('./example-pages/DashboardAnalytics')
);
const DashboardStatistics = lazy(() =>
  import('./example-pages/DashboardStatistics')
);
const ElementsAvatars = lazy(() => import('./example-pages/ElementsAvatars'));
const ElementsBadges = lazy(() => import('./example-pages/ElementsBadges'));
const ElementsButtons = lazy(() => import('./example-pages/ElementsButtons'));
const ElementsDropdowns = lazy(() =>
  import('./example-pages/ElementsDropdowns')
);
const ElementsIcons = lazy(() => import('./example-pages/ElementsIcons'));
const ElementsNavigationMenus = lazy(() =>
  import('./example-pages/ElementsNavigationMenus')
);
const ElementsPagination = lazy(() =>
  import('./example-pages/ElementsPagination')
);
const ElementsProgressBars = lazy(() =>
  import('./example-pages/ElementsProgressBars')
);
const ElementsRatings = lazy(() => import('./example-pages/ElementsRatings'));
const ElementsRibbons = lazy(() => import('./example-pages/ElementsRibbons'));
const ElementsScrollable = lazy(() =>
  import('./example-pages/ElementsScrollable')
);
const ElementsSearchBars = lazy(() =>
  import('./example-pages/ElementsSearchBars')
);
const ElementsTimelines = lazy(() =>
  import('./example-pages/ElementsTimelines')
);
const ElementsUtilitiesHelpers = lazy(() =>
  import('./example-pages/ElementsUtilitiesHelpers')
);
const BlocksChartsLarge = lazy(() =>
  import('./example-pages/BlocksChartsLarge')
);
const BlocksChartsSmall = lazy(() =>
  import('./example-pages/BlocksChartsSmall')
);
const BlocksComposed = lazy(() => import('./example-pages/BlocksComposed'));
const BlocksContentText = lazy(() =>
  import('./example-pages/BlocksContentText')
);
const BlocksGrids = lazy(() => import('./example-pages/BlocksGrids'));
const BlocksIcons = lazy(() => import('./example-pages/BlocksIcons'));
const BlocksImages = lazy(() => import('./example-pages/BlocksImages'));
const BlocksListsLarge = lazy(() => import('./example-pages/BlocksListsLarge'));
const BlocksListsSmall = lazy(() => import('./example-pages/BlocksListsSmall'));
const BlocksNavigation = lazy(() => import('./example-pages/BlocksNavigation'));
const BlocksProfilesSmall = lazy(() =>
  import('./example-pages/BlocksProfilesSmall')
);
const BlocksProgressCircular = lazy(() =>
  import('./example-pages/BlocksProgressCircular')
);
const BlocksProgressHorizontal = lazy(() =>
  import('./example-pages/BlocksProgressHorizontal')
);
const BlocksSparklinesLarge = lazy(() =>
  import('./example-pages/BlocksSparklinesLarge')
);
const BlocksSparklinesSmall = lazy(() =>
  import('./example-pages/BlocksSparklinesSmall')
);
const BlocksStatistics = lazy(() => import('./example-pages/BlocksStatistics'));
const MarketingCta = lazy(() => import('./example-pages/MarketingCta'));
const MarketingFeatureSections = lazy(() =>
  import('./example-pages/MarketingFeatureSections')
);
const MarketingFooters = lazy(() => import('./example-pages/MarketingFooters'));
const MarketingHeaders = lazy(() => import('./example-pages/MarketingHeaders'));
const MarketingHero = lazy(() => import('./example-pages/MarketingHero'));
const MarketingIcons = lazy(() => import('./example-pages/MarketingIcons'));
const MarketingPartners = lazy(() =>
  import('./example-pages/MarketingPartners')
);
const MarketingPricingTables = lazy(() =>
  import('./example-pages/MarketingPricingTables')
);
const MarketingTestimonials = lazy(() =>
  import('./example-pages/MarketingTestimonials')
);
const WidgetsAccordions = lazy(() =>
  import('./example-pages/WidgetsAccordions')
);
const WidgetsCalendars = lazy(() => import('./example-pages/WidgetsCalendars'));
const WidgetsCarousels = lazy(() => import('./example-pages/WidgetsCarousels'));
const WidgetsContextMenus = lazy(() =>
  import('./example-pages/WidgetsContextMenus')
);
const WidgetsDragDrop = lazy(() => import('./example-pages/WidgetsDragDrop'));
const WidgetsGuidedTours = lazy(() =>
  import('./example-pages/WidgetsGuidedTours')
);
const WidgetsImageCrop = lazy(() => import('./example-pages/WidgetsImageCrop'));
const WidgetsLoadingIndicators = lazy(() =>
  import('./example-pages/WidgetsLoadingIndicators')
);
const WidgetsModals = lazy(() => import('./example-pages/WidgetsModals'));
const WidgetsNotifications = lazy(() =>
  import('./example-pages/WidgetsNotifications')
);
const WidgetsPopovers = lazy(() => import('./example-pages/WidgetsPopovers'));
const WidgetsTabs = lazy(() => import('./example-pages/WidgetsTabs'));
const WidgetsTooltips = lazy(() => import('./example-pages/WidgetsTooltips'));
const WidgetsTreeView = lazy(() => import('./example-pages/WidgetsTreeView'));
const ChartsApex = lazy(() => import('./example-pages/ChartsApex'));
const ChartsGauges = lazy(() => import('./example-pages/ChartsGauges'));
const Chartjs = lazy(() => import('./example-pages/Chartjs'));
const ChartsSparklines = lazy(() => import('./example-pages/ChartsSparklines'));
const Tables = lazy(() => import('./example-pages/Tables'));
const Maps = lazy(() => import('./example-pages/Maps'));
const FormsClipboard = lazy(() => import('./example-pages/FormsClipboard'));
const FormsColorpicker = lazy(() => import('./example-pages/FormsColorpicker'));
const FormsDatepicker = lazy(() => import('./example-pages/FormsDatepicker'));
const FormsInputMask = lazy(() => import('./example-pages/FormsInputMask'));
const FormsInputSelect = lazy(() => import('./example-pages/FormsInputSelect'));
const FormsSlider = lazy(() => import('./example-pages/FormsSlider'));
const FormsSteppers = lazy(() => import('./example-pages/FormsSteppers'));
const FormsTextareaAutosize = lazy(() =>
  import('./example-pages/FormsTextareaAutosize')
);
const FormsTimepicker = lazy(() => import('./example-pages/FormsTimepicker'));
const FormsTypeahead = lazy(() => import('./example-pages/FormsTypeahead'));
const FormsUpload = lazy(() => import('./example-pages/FormsUpload'));
const FormsValidation = lazy(() => import('./example-pages/FormsValidation'));
const FormsWysiwygEditor = lazy(() =>
  import('./example-pages/FormsWysiwygEditor')
);
const PageCalendar = lazy(() => import('./example-pages/PageCalendar'));
const PageChat = lazy(() => import('./example-pages/PageChat'));
const PageProjects = lazy(() => import('./example-pages/PageProjects'));
const PageFileManager = lazy(() => import('./example-pages/PageFileManager'));
const PageAuthModals = lazy(() => import('./example-pages/PageAuthModals'));
const PageLoginBasic = lazy(() => import('./example-pages/PageLoginBasic'));
const PageLoginCover = lazy(() => import('./example-pages/PageLoginCover'));
const PageLoginIllustration = lazy(() =>
  import('./example-pages/PageLoginIllustration')
);
const PageLoginOverlay = lazy(() => import('./example-pages/PageLoginOverlay'));
const PageRegisterBasic = lazy(() =>
  import('./example-pages/PageRegisterBasic')
);
const PageRegisterCover = lazy(() =>
  import('./example-pages/PageRegisterCover')
);
const PageRegisterIllustration = lazy(() =>
  import('./example-pages/PageRegisterIllustration')
);
const PageRegisterOverlay = lazy(() =>
  import('./example-pages/PageRegisterOverlay')
);
const PageRecoverBasic = lazy(() => import('./example-pages/PageRecoverBasic'));
const PageRecoverCover = lazy(() => import('./example-pages/PageRecoverCover'));
const PageRecoverIllustration = lazy(() =>
  import('./example-pages/PageRecoverIllustration')
);
const PageRecoverOverlay = lazy(() =>
  import('./example-pages/PageRecoverOverlay')
);
const PageProfile = lazy(() => import('./example-pages/PageProfile'));
const PageInvoice = lazy(() => import('./example-pages/PageInvoice'));
function App({ Component, pageProps }) {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.3
  };

  const SuspenseLoading = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
      let timeout = setTimeout(() => setShow(true), 300);
      return () => {
        clearTimeout(timeout);
      };
    }, []);

    return (
      <>
        <AnimatePresence>
          {show && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}>
              <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
                <div className="d-flex align-items-center flex-column px-4">
                  <ClimbingBoxLoader color={'#3c44b1'} loading={true} />
                </div>
                <div className="text-muted font-size-xl text-center pt-3">
                  Please wait while we load the live preview examples
                  <span className="font-size-lg d-block text-dark">
                    This live preview instance can be slower than a real
                    production build!
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };
  return (
    <Provider store={store}>
      <ScrollToTop>
        <ThemeProvider theme={MuiTheme}>
          <AnimatePresence>
            <Suspense fallback={<SuspenseLoading />}>
              <MinimalLayout>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Component {...pageProps} />
                </motion.div>
              </MinimalLayout>
            </Suspense>
          </AnimatePresence>
        </ThemeProvider>
      </ScrollToTop>
    </Provider>
  );
}

export default App;