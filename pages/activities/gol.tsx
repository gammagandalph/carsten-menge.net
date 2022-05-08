import Navigation from "../../components/navigation.component";

export default function GoL() {
  return (
    <Navigation active="activities" title="Game of Life">
      <iframe
        className="h-screen w-full"
        src="http://gol.eleflansch.de/"
      ></iframe>
    </Navigation>
  );
}
