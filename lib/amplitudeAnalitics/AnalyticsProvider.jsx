import { AmplitudeAnalyticsProvider } from './AmplitudeAnalitixsProvider';

export const AnalyticsProvider = ({ children }) => {
    return (
      <AmplitudeAnalyticsProvider
        apiKey={"e563255061cb5dc3e6864ddd3c02f5c"}
      >
        {children}
      </AmplitudeAnalyticsProvider>
    )

}
