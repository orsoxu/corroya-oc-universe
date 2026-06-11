import { DraggableCanvas } from "@/components/DraggableCanvas";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-museum-paper text-museum-ink">
      <SiteHeader />
      <DraggableCanvas />
    </main>
  );
}
