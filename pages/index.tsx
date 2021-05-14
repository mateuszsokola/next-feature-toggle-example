import Head from "next/head";
import { Layout } from "antd";

import { GdpChart, TreasuryChart } from "../components/Charts";

const { Header, Content } = Layout;

export default function Home() {
  return (
    <Layout className="layout">
      <Head>
        <title>🚦 Feature Toggle in React.JS</title>
      </Head>
      <Header>
        <div className="logo" />
      </Header>
      <Content className="content">
        <GdpChart />
        <TreasuryChart />
      </Content>
    </Layout>
  );
}
