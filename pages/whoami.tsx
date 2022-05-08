import Navigation from "../components/navigation.component";

export default function Home() {
  return (
      <Navigation title="Über mich" active="whoami">
        <p className="first-letter:text-xl text-slate-900">
          Mein Name ist Carsten. Ich bin am 14. September 1984 in Flensburg
          geboren und lebe auch heute hier.
        </p>
        <p className="first-letter:text-xl text-slate-900">
          Ich arbeite in der IT im sozialen Bereich. In meiner Arbeit entwickle,
          manage und supporte ich die IT eines kleinen Unternehmens. Auf dieser
          Seite stelle ich mich und ein paar Dinge, an denen ich so arbeite,
          vor. Dabei sind ein paar Dinge aus dem Studium und kleinere private
          Projekte.
        </p>
      </Navigation>
  );
}
