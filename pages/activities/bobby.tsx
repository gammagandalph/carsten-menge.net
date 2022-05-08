import Navigation from "../../components/navigation.component";

export default function Bobby() {
  return (
    <Navigation active="activities" title="Bobby Car Racer">
      <iframe
        className="h-screen w-full"
        src="https://racer.eleflansch.de/"
      ></iframe>
    </Navigation>
  );
}
