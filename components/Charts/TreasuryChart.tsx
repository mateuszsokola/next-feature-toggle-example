import React from "react";
import { Card, Result } from "antd";

import styles from "../../styles/Charts.module.css";

export const TreasuryChart = () => {
  return (
    <Card title="10-Year Treasury Constant Maturity" className={styles.chart}>
      <div className={styles.chartContent}>
        <Result status="500" />
      </div>
    </Card>
  );
};
