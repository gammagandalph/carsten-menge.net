import Navigation from "../components/navigation.component";
import Accordion from "../components/accordion.component";

export default function Home() {
  return (
    <Navigation title="Lebenslauf" active="cv">
      <Accordion content={content} />
    </Navigation>
  );
}

const yearsStyle = "text-lg font-medium text-slate-900"

const content = {
  items: [
    {
      title: "Ausbildung",
      content: (
        <div className="text-slate-900">
          <h5 className={yearsStyle}>2005 - 2009</h5>
          <hr className="border-slate-900"/>
          <p>Christian-Albrechts-Universität zu Kiel</p>
          <p>Lehramt für Gymnasien in den Fächern Latein und Geschichte</p>

          <h5 className={yearsStyle}>2009 - 2016</h5>
          <hr className="border-slate-900"/>
          <p>Universität Flensburg</p>
          <p>
            Erziehungswissenschaften, Schwerpunkt:
            Erwachsenenbildung/Weiterbildung, Wahlfach Philosophie
          </p>

          <h5 className={yearsStyle}>2017 - 2021</h5>
          <hr className="border-slate-900"/>
          <p>Hochschule Flensburg</p>
          <p>Angewandte Informatik</p>
        </div>
      ),
    },
    {
      title: "Berufserfahrung",
      content: (
        <div>
          <h5 className={yearsStyle}>2009</h5>
          <hr className="border-slate-900"/>
          <p>Schutzengel e.V. Flensburg</p>
          <p>
            <a
              href="https://www.schutzengel-flensburg.de"
              target="_blank"
              rel="noreferrer noopener"
            >
              Schutzengel
            </a>{" "}
            ist ein Verein in Flensburg, der niederschwellige Hilfen für
            Familien mit Kindern zwischen 0 und drei Jahren anbietet.
          </p>

          <h5 className={yearsStyle}>2010 - 2011</h5>
          <hr className="border-slate-900"/>
          <p>
            Hausaufgabenbetreuung für die 1. bis 4. Klassen der
            UNESCO-Projektschule Flensburg-Weiche
          </p>

          <h5 className={yearsStyle}>2011 - 2012</h5>
          <hr className="border-slate-900"/>
          <p>
            Studentische Hilfskraft am Lehrstuhl für
            Erwachsenenbildung/Weiterbildung im Institut für
            Erziehungswissenschaften an der Universität Flensburg
          </p>

          <h5 className={yearsStyle}>2012</h5>
          <hr className="border-slate-900"/>
          <p>Mitarbeit im Qualitätsmanagement für Schutzengel Flensburg</p>

          <h5 className={yearsStyle}>2012 - 2015</h5>
          <hr className="border-slate-900"/>
          <p>
            Studentische Hilfskraft bei der Professur für Theorie der Bildung
            des Lehrens und Lernens am Institut für Erziehungswissenschaften an
            der Universität Flensburg Studentische Hilfskraft im BMBF-Projekt
            UHU – Unterricht Heterogenität Ungleichheit
          </p>

          <h5 className={yearsStyle}>2016</h5>
          <hr className="border-slate-900"/>
          <p>Kundenbefragung im Fördepark Flensburg</p>

          <h5 className={yearsStyle}>2016 - 2021</h5>
          <hr className="border-slate-900"/>
          <p>Fleggaard</p>
          <p>Verkaufs- und Lagerassistent</p>

          <h5 className={yearsStyle}>Seit 2021</h5>
          <hr className="border-slate-900"/>
          <p>Schutzengel Flensburg GmbH</p>
          <p>IT Support und Project Management</p>
        </div>
      ),
    },
    {
      title: "Sonstiges Engagement",
      content: (
        <div>
          <h5 className={yearsStyle}>2005 - 2012</h5>
          <hr className="border-slate-900"/>
          <p>Ehrenamtliche Mitarbeit bei Schutzengel e.V. Flensburg</p>

          <h5 className={yearsStyle}>2011 - 2012</h5>
          <hr className="border-slate-900"/>
          <p>Prüfungsausschuss für den Studiengang Erwachsenenbildung</p>
          <p>
            Institutsbeirat des Instituts für Allgemeine Pädagogik und
            Erwachsenenbildung/ Weiterbildung
          </p>

          <h5 className={yearsStyle}>2010 - 2014</h5>
          <hr className="border-slate-900"/>
          <p>Fachschaftsvertretung Erziehungswissenschaften</p>

          <h5 className={yearsStyle}>2012 - 2015</h5>
          <hr className="border-slate-900"/>
          <p>
            Mitglied des Studierendenparlaments der Europauniversität Flensburg
          </p>
          <p>Präsidium 2014-2015</p>

          <h5 className={yearsStyle}>2015 - 2016</h5>
          <hr className="border-slate-900"/>
          <p>
            Referent für Hochschulpolitik im AStA der Europauniversität
            Flensburg
          </p>
        </div>
      ),
    },
  ],
};
