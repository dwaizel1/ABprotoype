import { redirect } from "next/navigation";
import { getKeyServiceSlugs } from "@/lib/key-services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getKeyServiceSlugs().map((slug) => ({ slug }));
}

export default async function KeyServiceRedirectPage(_props: PageProps) {
  redirect("/key-services");
}
