export async function POST(req) {
  const { url } = await req.json();

  if (!url) {
    return new Response(JSON.stringify({ error: "Missing TikTok URL" }), {
      status: 400,
    });
  }

  let cleanedUrl = extractTikTokUrl(url);

  try {
    if (cleanedUrl.includes("vm.tiktok.com")) {
      cleanedUrl = await resolveTikTokLink(cleanedUrl);
    }

    const response = await fetch(`https://tikwm.com/api/?url=${cleanedUrl}`);
    const data = await response.json();

    if (data.code !== 0) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch video. Try another link." }),
        { status: 400 }
      );
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Something went wrong: " + err.message }),
      { status: 500 }
    );
  }
}

// Helper to follow short TikTok vm links
async function resolveTikTokLink(shortUrl) {
  const res = await fetch(shortUrl, {
    method: "GET",
    redirect: "manual",
  });

  const location = res.headers.get("location");
  if (!location || !location.includes("tiktok.com")) {
    throw new Error("Could not resolve TikTok short link");
  }

  return location;
}

// Helper to clean TikTok Lite or SMS junk
function extractTikTokUrl(text) {
  const regex = /(https:\/\/(www\.|vm\.)?tiktok\.com\/[^\s]+)/;
  const match = text.match(regex);
  return match ? match[0].trim() : text.trim();
}
