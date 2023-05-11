import { NotificationProvider } from "web3uikit";
import Layout from "@/components/layout/layout.js";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationProvider>
  );
}
