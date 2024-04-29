import Container from "./Container";
import InfoPanel from "./InfoPanel";
import ItemsPanel from "./ItemsPanel";

export default function Layout() {
  return (
    <Container className={"min-h-0 grid-rows-[repeat(2,50%)] text-xl grow grid grid-cols-1 lg:texl-xl lg:grid-cols-2 lg:grid-rows-1"}>
      <ItemsPanel></ItemsPanel>
      <InfoPanel></InfoPanel>
    </Container>
  );
}
