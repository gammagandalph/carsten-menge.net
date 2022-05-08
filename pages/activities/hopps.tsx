import Navigation from "../../components/navigation.component";

export default function Hopps() {
  return (
    <Navigation active="activities" title="Hopps">
      <iframe
        className="h-screen w-full"
        src="http://hopps.eleflansch.de/"
      ></iframe>
    </Navigation>
  );
}
