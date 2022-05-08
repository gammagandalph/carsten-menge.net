import Navigation from "../components/navigation.component";

export default function Home() {
  return (
    <Navigation title="Kontakt" active="contact">
      <p className="text-xl font-medium first-letter:text-2xl text-slate-900">E-Mail: <span className="font-mono text-xl text-slate-900">menge.carsten (a) googlemail.com</span></p>
    </Navigation>
  );
}
