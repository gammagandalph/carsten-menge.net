import Link from "next/link";
import Image from "next/image";

export default function Navigation({ children, active, title }) {
  function linkStyle(activeSite: string) {
    return `rounded-t-xl transition hover:delay-75 hover:text-slate-900 hover:bg-gray-300 hover:rounded-t-xl p-4 ${
      active === activeSite ? "text-slate-900 bg-gray-300" : "text-gray-300 bg-slate-900"
    }`;
  }

  return (
    <div className="bg-gray-300 p-0 min-h-screen ">
      <div className="bg-slate-900 shadow-lg">
        <h1 className="text-gray-300 bg-slate-900 text-center text-4xl pt-4 pb-4 ">
          Carsten Menge
        </h1>
        <div className="pt-3 pb-3.5">
          <Link href="/">
            <a className={linkStyle("home")}>Home</a>
          </Link>
          <Link href="/whoami">
            <a className={linkStyle("whoami")}>Über mich</a>
          </Link>
          <Link href="/cv">
            <a className={linkStyle("cv")}>Lebenslauf</a>
          </Link>
          <Link href="/activities">
            <a className={linkStyle("activities")}>Was ich so treibe</a>
          </Link>
          <Link href="/contact">
            <a className={linkStyle("contact")}>Kontakt?</a>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-10">
        <div className="col-span-2 p-3">
          <h3 className="first-letter:text-3xl font-medium text-slate-900 text-2xl">{title}</h3>
        </div>
        <div className="col-span-6 p-3">{children}</div>
        <div className="col-span-2 text-center p-3">
          <div>
            <Image
              src="/ich.jpg"
              alt="Ein Bild von mir"
              width={200}
              height={200}
            />
            <div>
              <a
                href="https://gitlab.com/carsten.menge"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/gitlab.png"
                  width={32}
                  height={32}
                  alt="GitLab-Logo"
                />
              </a>{" "}
              <a
                href="https://github.com/gammagandalph"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/github.ico"
                  width={32}
                  height={32}
                  alt="GitHub-Logo"
                />
              </a>{" "}
              <a
                href="https://twitter.com/gamma_gandalph"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/twitter.png"
                  width={32}
                  height={32}
                  alt="Twitter-Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
