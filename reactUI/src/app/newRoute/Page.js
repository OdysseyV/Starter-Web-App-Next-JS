import { ClientOnly } from "./client"; // use new Client Component

export function generateStaticParams() {
  return [{ newRoute: [""] }];
}

export default function Page() {
  return "..."; // We'll update this
}
