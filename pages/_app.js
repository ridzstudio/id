import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import { Suspense, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ClimbingBoxLoader } from 'react-spinners';
import { ThemeProvider } from '@material-ui/styles';
import MuiTheme from './theme';
import ScrollToTop from './utils/ScrollToTop';
import './assets/base.scss';

// Icons

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faTwitter, faVuejs, faReact, faHtml5, faGoogle, faInstagram, faPinterest, faYoutube, faDiscord, faSlack, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons';
import { far, faSquare, faLifeRing, faCheckCircle, faTimesCircle, faDotCircle, faThumbsUp, faComments, faFolderOpen, faTrashAlt, faFileImage, faFileArchive, faCommentDots, faFolder, faKeyboard, faCalendarAlt, faEnvelope, faAddressCard, faMap, faObjectGroup, faImages, faUser, faLightbulb, faGem, faClock, faUserCircle, faQuestionCircle, faBuilding, faBell, faFileExcel, faFileAudio, faFileVideo, faFileWord, faFilePdf, faFileCode, faFileAlt, faEye, faChartBar } from '@fortawesome/free-regular-svg-icons';
import { fas, faExclamation, faAngleDoubleRight, faAngleDoubleLeft, faCheck, faSmile, faHeart, faBatteryEmpty, faBatteryFull, faChevronRight, faSitemap, faPrint, faMapMarkedAlt, faTachometerAlt, faAlignCenter, faExternalLinkAlt, faShareSquare, faInfoCircle, faSync, faQuoteRight, faStarHalfAlt, faShapes, faCarBattery, faTable, faCubes, faPager, faCameraRetro, faBomb, faNetworkWired, faBusAlt, faBirthdayCake, faEyeDropper, faUnlockAlt, faDownload, faAward, faPlayCircle, faReply, faUpload, faBars, faEllipsisV, faSave, faSlidersH, faCaretRight, faChevronUp, faPlus, faLemon, faChevronLeft, faTimes, faChevronDown, faFilm, faSearch, faEllipsisH, faCog, faArrowsAltH, faPlusCircle, faAngleRight, faAngleUp, faAngleLeft, faAngleDown, faArrowUp, faArrowDown, faArrowRight, faArrowLeft, faStar, faSignOutAlt, faLink } from '@fortawesome/free-solid-svg-icons';
library.add(far, faSquare, faLifeRing, faCheckCircle, faTimesCircle, faDotCircle, faThumbsUp, faComments, faFolderOpen, faTrashAlt, faFileImage, faFileArchive, faCommentDots, faFolder, faKeyboard, faCalendarAlt, faEnvelope, faAddressCard, faMap, faObjectGroup, faImages, faUser, faLightbulb, faGem, faClock, faUserCircle, faQuestionCircle, faBuilding, faBell, faFileExcel, faFileAudio, faFileVideo, faFileWord, faFilePdf, faFileCode, faFileAlt, faEye, faChartBar);
library.add(fab, faFacebook, faTwitter, faVuejs, faReact, faHtml5, faGoogle, faInstagram, faPinterest, faYoutube, faDiscord, faSlack, faDribbble, faGithub);
library.add(fas, faExclamation, faAngleDoubleRight, faAngleDoubleLeft, faCheck, faSmile, faHeart, faBatteryEmpty, faBatteryFull, faChevronRight, faSitemap, faPrint, faMapMarkedAlt, faTachometerAlt, faAlignCenter, faExternalLinkAlt, faShareSquare, faInfoCircle, faSync, faQuoteRight, faStarHalfAlt, faShapes, faCarBattery, faTable, faCubes, faPager, faCameraRetro, faBomb, faNetworkWired, faBusAlt, faBirthdayCake, faEyeDropper, faUnlockAlt, faDownload, faAward, faPlayCircle, faReply, faUpload, faBars, faEllipsisV, faSave, faSlidersH, faCaretRight, faChevronUp, faPlus, faLemon, faChevronLeft, faTimes, faChevronDown, faFilm, faSearch, faEllipsisH, faCog, faArrowsAltH, faPlusCircle, faAngleRight, faAngleUp, faAngleLeft, faAngleDown, faArrowUp, faArrowDown, faArrowRight, faArrowLeft, faStar, faSignOutAlt, faLink);

// Layout Blueprints

import { MinimalLayout } from './layout-blueprints';

// Constants

const store = configureStore();

function App({ Component, pageProps }) {
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