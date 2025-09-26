module.exports = {
  icon: true,
  svgoConfig: {
    plugins: [
      {
        name: "removeViewBox",
        active: false,
      },
      {
        name: "removeDimensions",
        active: true,
      },
    ],
  },
  svgProps: {
    fill: "currentColor",
  },
};
