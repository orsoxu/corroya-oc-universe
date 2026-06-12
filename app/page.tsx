import { CharacterCollectionSection } from "@/components/CharacterCollectionSection";
import { DraggableCanvas } from "@/components/DraggableCanvas";
import { SiteHeader } from "@/components/SiteHeader";
import { WorldviewSection } from "@/components/WorldviewSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-museum-paper text-museum-ink">
      <SiteHeader />
      <DraggableCanvas />
      <WorldviewSection />
      <CharacterCollectionSection />
    </main>
  );
}
