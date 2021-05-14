import React from "react";

export const FeatureToggleContext = React.createContext({
  enabledFeatures: [] as string[],
  enableFeature: (featureName: string) => {},
  disableFeature: (featureName: string) => {},
});
