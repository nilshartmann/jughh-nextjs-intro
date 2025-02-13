import { NewsletterRegistration } from "@/components/NewsletterRegistration";

export default function GlobalHeader() {
  return (
    <div
      className={"mx-auto flex w-full max-w-screen-lg items-center justify-end"}
    >
      <NewsletterRegistration />
    </div>
  );
}
