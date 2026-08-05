import { KeyServicesPage } from "@/components/KeyServicesPage";
import { keyServices } from "@/lib/key-services";

export default function KeyServicesIndexPage() {
  return <KeyServicesPage services={keyServices} />;
}
