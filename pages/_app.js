import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import * as amplitude from "@amplitude/analytics-browser";
import { useEffect } from "react";
import { AnalyticsProvider } from "@lib/amplitudeAnalitics/AnalyticsProvider";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   amplitude.setUserId("Antonio test");
  //   amplitude.init("e563255061cb5dc3e6864ddd3c02f5c", { autocapture: true });
  // }, []);
  // amplitude.track("Home test");

  return (
    <AnalyticsProvider>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AnalyticsProvider>
  );
}

export default MyApp;
