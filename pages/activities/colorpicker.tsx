import Navigation from "../../components/navigation.component";

export default function Coloricker() {
  return (
    <Navigation active="activities" title="Colorpicker">
      <iframe
        className="h-screen w-full"
        src="https://colorpicker.eleflansch.de/"
      ></iframe>
    </Navigation>
  );
}
