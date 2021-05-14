import { FeatureToggle } from "../components/FeatureToggleProvider";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const enabledFeatures = [
    process.env.NEXT_PUBLIC_FEATURE_TREASURY_CHART ? "treasury_chart" : "",
  ].filter(feature => feature !== '');

  return (
    <FeatureToggle enabledFeatures={enabledFeatures}>
      <Component {...pageProps} />
    </FeatureToggle>
  );
}

export default MyApp;
