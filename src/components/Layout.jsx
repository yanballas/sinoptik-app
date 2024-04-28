import Container from "./Container";
import InfoPanel from "./InfoPanel";
import ItemsPanel from "./ItemsPanel";

export default function Layout() {
  return (
    <Container className={"text-xl grow grid grid-cols-1 lg:texl-xl lg:grid-cols-2"}>
      <ItemsPanel></ItemsPanel>
      <InfoPanel></InfoPanel>
    </Container>
  );
}
