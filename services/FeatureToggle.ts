import axios from "axios";

type FeatureMap = {
  [k: string]: boolean;
};

export type FeatureArray = [string, boolean];

export const fetchFeatures = async () => {
  try {
    const { data } = await axios.get<FeatureMap>("/api/features");

    const featureNames = Object.keys(data);
    return featureNames.reduce<FeatureArray[]>((result, featureName) => {
      const featureStatus = data[featureName];

      return [...result, [featureName, featureStatus]];
    }, []);
  } catch (e) {
    console.error("Something went wrong", e);
  }

  return [] as FeatureArray[];
};
