import Wordmark from "@/components/Wordmark"
import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");
  return (
    <footer className="flex flex-col items-centre justify-between gap-6 border-t border-border px-8 py-7 md:flex-row text-foreground" >
        <Link href="/"> 
            <Wordmark/>
            <span className="sr-only">
                AI Pencil Home Page
            </span>
        </Link>
        <nav aria-label="Footer">
            <ul className="flex gap-6">
                {settings.data.navigation.map((item) =>(
                    <li key = {item.label}>
                        <PrismicNextLink field={item.link} className="inline-flex min-h-11 items-center text-foreground hover:text-primary transition-colors">
                            {item.label}
                        </PrismicNextLink>
                    </li>
                ))}
            </ul>
        </nav>
    </footer>
  )
}
