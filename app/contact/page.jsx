import HomeButton from "@/components/HomeButton";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-w-2xl mx-auto p-6">
      <HomeButton/>
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-2">
        Have a question or concern? Reach out to us.
      </p>
      <p className="mb-2">
        Email: <a href="mailto:support@fixoro.com" className="text-blue-600 hover:underline">support@fixoro.com</a>
      </p>
      <p>
        We'll do our best to respond within 2 business days.
      </p>
    </div>
  );
}