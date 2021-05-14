// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res
    .status(200)
    .json({ treasury_chart: process.env.FEATURE_TREASURY_CHART === "true" });
};
