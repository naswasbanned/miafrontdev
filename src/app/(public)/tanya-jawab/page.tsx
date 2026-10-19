import type { Metadata } from "next";
import {
  Button,
  Accordion,
  Breadcrumb,
  Container,
  PageHeader,
  CtaBand,
} from "@/components";
import { FAQ_GROUPS } from "@/data/faq";

export const metadata: Metadata = {
  title: "Tanya Jawab",
  description: "Jawaban atas pertanyaan yang sering diajukan orang tua.",
};

export default function TanyaJawabPage() {
  return (
    <Container>
      <Breadcrumb items={[["Beranda", "/"], ["Tanya Jawab"]]} />
      <PageHeader
        title="Tanya Jawab"
        desc="Jawaban singkat untuk pertanyaan yang sering muncul."
      />
      <div className="stack stack--lg">
        {FAQ_GROUPS.map((group, i) => (
          <section key={group.title} className="stack">
            <h2 className="text-heading-md">{group.title}</h2>
            <Accordion items={group.items} openFirst={i === 0} />
          </section>
        ))}
        <CtaBand
          title="Belum menemukan jawabannya?"
          text="Tanyakan langsung lewat WhatsApp. Kami bantu dengan sabar."
        >
          <Button
            variant="primary"
            href="https://wa.me/"
            iconLeft="message"
            newTab
          >
            Chat lewat WhatsApp
            <span className="visually-hidden"> (membuka tab baru)</span>
          </Button>
        </CtaBand>
      </div>
    </Container>
  );
}
