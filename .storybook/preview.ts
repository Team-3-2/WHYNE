import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
        query: {},
        segments: [],
        router: {
          push: async () => {},
          replace: async () => {},
          back: () => {},
          forward: () => {},
          prefetch: async () => {},
          refresh: () => {},
        },
      },
    },
  },
};

export default preview;
