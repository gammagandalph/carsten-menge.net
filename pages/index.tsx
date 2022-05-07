import React from "react";
import Navigation from "../components/navigation.component";

export default function Home() {
  return (
    <Navigation title="Moin" active="home">
      <p>
        Auf meiner Seite findet Ihr ein paar Informationen über mich und was ich
        so treibe.
      </p>
    </Navigation>
  );
}
