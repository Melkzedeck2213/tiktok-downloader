import HomeButton from "@/components/HomeButton";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-w-2xl mx-auto p-6">
      <HomeButton/>
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-2">
        FIXORO does not collect, store, or share any personal information. Any TikTok video URLs you paste are processed temporarily for the purpose of downloading the content.
      </p>
      <p className="mb-2">
        We use Google AdSense to serve ads. AdSense may collect non-personally identifiable data via cookies. You can manage your ad preferences in your Google account.
      </p>
      <p>
        By using this site, you agree to this policy. If you have any questions, please contact us.
      </p>
    </div>
  );
}