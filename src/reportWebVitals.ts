import { Metric, ReportOpts } from 'web-vitals';

function sendAttributionData(metric: Metric) {
  console.log(JSON.stringify(metric));
  // Send Results To Analytics from here
  // https://create-react-app.dev/docs/measuring-performance/
}

const reportWebVitals = (options?: ReportOpts) => {
  import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
    onCLS(sendAttributionData, options);
    onINP(sendAttributionData, options);
    onFCP(sendAttributionData, options);
    onLCP(sendAttributionData, options);
    onTTFB(sendAttributionData, options);
  });
};

export default reportWebVitals;
