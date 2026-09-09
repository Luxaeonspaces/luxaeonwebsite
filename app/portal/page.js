import PortalHeader from "./components/PortalHeader";
import PortalClient from "./components/PortalClient";

// import "./page.scss";

export default function PublicPortalPage() {
  return (
    <main className="page-start">
      <div className="portal-container">
        <PortalHeader />

        <PortalClient />
      </div>
    </main>
  );
}