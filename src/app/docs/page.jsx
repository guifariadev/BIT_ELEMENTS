import { redirect } from "next/navigation";
import { components } from "@/components/content/data/Components";

//  WYP -> Use /docs/componentName instead of  
//  pass a slug after by opening docs an then the slug. 
// That means: All components /docs/[slug] from the data/components

export default function DocsPage() {
  const first = components[0];

  if (!first) {
    return (
      <div className="text-white p-6">
        <h1 className="text-2xl font-bold">No component found</h1>
      </div>
    );
  }

  redirect(`/docs/${first.slug}`);
}
