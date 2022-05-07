/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Navigation from "../../components/navigation.component";
import * as manipuDOM from "../../public/manipuDOM";
import { useEffect } from "react";

export default function Coloricker() {
  useEffect(() => {
    manipuDOM.main(document)
  });
  return (
    <Navigation active="activities" title="Colorpicker">
      <div id="main"/>
    </Navigation>
  );
}
