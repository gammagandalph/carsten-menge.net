import Navigation from "../components/navigation.component";
import Link from "next/link";

export default function Home() {
  return (
    <Navigation title="Was ich so treibe" active="activities">
      <div className="text-slate-900">
        <h3 className="text-xl font-medium">
          Webtechnologien - JavaScript und Co
        </h3>
        <hr className="border-slate-900" />
        <Link href="/activities/bobby">
          <a className="hover:bg-slate-400 hover:rounded-sm ">
            Bobby-Car-Racer
          </a>
        </Link>{" "}
        <br />
        <Link href="/activities/colorpicker">
          <a className="hover:bg-slate-400 hover:rounded-sm ">Colorpicker</a>
        </Link>{" "}
        <br />
        <Link href="/activities/hopps">
          <a className="hover:bg-slate-400 hover:rounded-sm ">Hopps</a>
        </Link>{" "}
        <br />
        <a
          className="hover:bg-slate-400 hover:rounded-sm "
          href="https://gitlab.com/carsten.menge/webprogue07"
          target="_blank"
          rel="noreferrer noopener"
        >
          Wurfsimulation in Go (Source)
        </a>{" "}
        <br />
        <h3 className="text-xl font-medium">Spieleprogrammierung in Unity</h3>
        <hr className="border-slate-900" />
        <a
          className="hover:bg-slate-400 hover:rounded-sm "
          href="https://gitlab.com/carsten.menge/spieleprogrammierung_2020"
          target="_blank"
          rel="noreferrer noopener"
        >
          Spheroid Silliness (Source)
        </a>{" "}
        <br />
        <h3 className="text-xl font-medium">Sonstiges</h3>
        <hr className="border-slate-900" />
        <a
          className="hover:bg-slate-400 hover:rounded-sm "
          href="https://gitlab.com/carsten.menge/picx"
          target="_blank"
          rel="noreferrer noopener"
        >
          picx - Ein Bildmosaikgenerator in Go (Source)
        </a>{" "}
        <br />
        <Link href="/activities/gol">
          <a className="hover:bg-slate-400 hover:rounded-sm ">
            Simple Conway&apos;s Game Of Life in JS{" "}
          </a>
        </Link>
        <a
          className="hover:bg-slate-400 hover:rounded-sm "
          href="https://gitlab.com/carsten.menge/game-of-life"
          target="_blank"
          rel="noreferrer noopener"
        >
          [Source]
        </a>
        <br />
        <a
          className="hover:bg-slate-400 hover:rounded-sm "
          href="https://github.com/gammagandalph/carsten-menge.net"
          target="_blank"
          rel="noreferrer noopener"
        >
          Diese Website (Source)
        </a>
        <br />
      </div>
    </Navigation>
  );
}
