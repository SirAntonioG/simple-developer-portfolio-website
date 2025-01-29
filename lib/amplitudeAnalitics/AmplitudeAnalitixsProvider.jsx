import { useEffect } from "react";
import * as amplitude from "@amplitude/analytics-browser";
import { AnalyticsContext } from "./AnaliticsContext";



export const AmplitudeAnalyticsProvider = ({ apiKey, children }) => {
  useEffect(() => {
    amplitude.init(apiKey);
  }, [apiKey]);

  return <AnalyticsContext.Provider>{children}</AnalyticsContext.Provider>;
};
