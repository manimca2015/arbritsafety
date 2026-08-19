import { WhatsappIcon } from "@/components/icons/social-icons";

export function WhatsappFloatButton() {
  return (
    <a
      href="https://wa.me/971586695300"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:bg-[#25D366]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <WhatsappIcon className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
