export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return new Response(
      JSON.stringify({ success: false, message: 'Missing URL' }),
      { status: 400 }
    );
  }

  try {
    const apiUrl = `https://tikwm.com/api/?url=${encodeURIComponent(url)}`;
    const res = await fetch(apiUrl);
    const data = await res.json();

    if (data && data.data && data.data.play) {
      return new Response(JSON.stringify({ success: true, data: data.data }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(
        JSON.stringify({ success: false, message: 'No video found' }),
        { status: 500 }
      );
    }
  } catch (e) {
    return new Response(
      JSON.stringify({ success: false, message: 'Server error' }),
      { status: 500 }
    );
  }
}
