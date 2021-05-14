import { FeatureToggle } from "../components/FeatureToggleProvider";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <FeatureToggle>
      <Component {...pageProps} />
    </FeatureToggle>
  );
}

export default MyApp;
