import Navigation from "../../components/navigation.component";
import { useEffect } from "react";

export default function Hopps() {
  useEffect(() => {
    const hopps = require("../../public/hopps");
    hopps.main();
  });
  return (
    <Navigation active="activities" title="Hopps">
      <div id="hopps"></div>
    </Navigation>
  );
}
