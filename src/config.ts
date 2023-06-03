const configuration = () => {
  if (process.env.NODE_ENV === "production") {
    return {
      env: "production",
      port: 3000,
      BasePathUrl: "not defined", // yet to be deployed
    };
  } else
    return {
      env: "development",
      port: 3000,
      BasePathUrl: "http://localhost:3000",
    };
};

export default configuration