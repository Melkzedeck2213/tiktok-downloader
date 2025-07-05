import HomeButton from "@/components/HomeButton";
export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-w-2xl mx-auto p-6">
      <HomeButton/>
      <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-2">
        This tool is provided by FIXORO for personal and educational use only. Users are solely responsible for how they use downloaded content.
      </p>
      <p className="mb-2">
        We do not host or store any videos. All rights to the content belong to TikTok and its creators.
      </p>
      <p>
        Using this site means you agree not to use it for violating any intellectual property laws or TikTok’s terms.
      </p>
    </div>
  );
}