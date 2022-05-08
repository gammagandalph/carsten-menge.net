import Navigation from "../../components/navigation.component";

export default function GoL() {
  return (
    <Navigation active="activities" title="Game of Life">
      <iframe
        className="h-screen w-full"
        src="https://gol.eleflansch.de/"
      ></iframe>
    </Navigation>
  );
}
