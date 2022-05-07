import Navigation from "../components/navigation.component";
import Link from "next/link";

export default function Home() {
  return (
    <Navigation title="Was ich so treibe" active="activities">
      <h3>Webtechnologien - JavaScript und Co</h3>
      <Link href="/activities/bobby">
        <a>Bobby-Car-Racer</a>
      </Link>{" "}
      <br />
      <Link href="/activities/colorpicker">
        <a>Colorpicker</a>
      </Link>{" "}
      <br />
      <Link href="/activities/hopps">
        <a>Hopps</a>
      </Link>{" "}
      <br />
      <a
        href="https://gitlab.com/carsten.menge/webprogue07"
        target="_blank"
        rel="noreferrer noopener"
      >
        Wurfsimulation in Go (Source)
      </a>{" "}
      <br />
      <h3>Spieleprogrammierung in Unity</h3>
      <a
        href="https://gitlab.com/carsten.menge/spieleprogrammierung_2020"
        target="_blank"
        rel="noreferrer noopener"
      >
        Spheroid Silliness (Source)
      </a>{" "}
      <br />
      <h3>Sonstiges</h3>
      <a
        href="https://gitlab.com/carsten.menge/picx"
        target="_blank"
        rel="noreferrer noopener"
      >
        picx - Ein Bildmosaikgenerator in Go (Source)
      </a>{" "}
      <br />
      <a
        href="https://gitlab.com/carsten.menge/game-of-life"
        target="_blank"
        rel="noreferrer noopener"
      >
        Simple Conway&apos;s Game Of Life in JS (Source)
      </a>
      <br />
      <a
        href="https://github.com/gammagandalph/carsten-menge.net"
        target="_blank"
        rel="noreferrer noopener"
      >
        Diese Website (Source)
      </a>
      <br />
    </Navigation>
  );
}
