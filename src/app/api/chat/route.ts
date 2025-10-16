export const runtime = "edge";

export async function POST(req: Request) {
  const { message } = await req.json();

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-5-nano",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for wine recommendations.",
        },
        { role: "user", content: message },
      ],
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    return new Response(JSON.stringify({ error: err }), { status: 500 });
  }

  const data = await res.json();
  const reply = data.choices?.[0]?.message?.content ?? "";
  return new Response(JSON.stringify({ reply }), {
    headers: { "Content-Type": "application/json" },
  });
}
