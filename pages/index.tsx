import React, { useCallback, useEffect } from "react";
import Head from "next/head";
import { Layout } from "antd";

import { GdpChart, TreasuryChart } from "../components/Charts";
import { useFeatureToggle } from "../hooks/useFeatureToggle";
import { FeatureArray, fetchFeatures } from "../services/FeatureToggle";

const { Header, Content } = Layout;

export default function Home() {
  const [isEnabled, enableFeature, disableFeature] = useFeatureToggle();

  const processFeatures = useCallback(async () => {
    try {
      const features = await fetchFeatures();
      features.forEach(([featureName, isEnabled]: FeatureArray) =>
        isEnabled ? enableFeature(featureName) : disableFeature(featureName)
      );
    } catch (_) {
      // do nothing
    }
  }, [enableFeature, disableFeature]);

  useEffect(() => {
    processFeatures();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout className="layout">
      <Head>
        <title>🚦 Feature Toggle in Next.js</title>
      </Head>
      <Header>
        <div className="logo" />
      </Header>
      <Content className="content">
        <GdpChart />
        {isEnabled("treasury_chart") && <TreasuryChart />}
      </Content>
    </Layout>
  );
}
