import Navigation from "../../components/navigation.component";

export default function Coloricker() {
  return (
    <Navigation active="activities" title="Colorpicker">
      <iframe
        className="h-screen w-full"
        src="http://colorpicker.eleflansch.de/"
      ></iframe>
    </Navigation>
  );
}
