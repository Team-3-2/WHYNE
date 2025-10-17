export const runtime = "edge";

export async function POST(req: Request) {
  const { message } = await req.json();

  const res = await fetch(`${process.env.OPENAI_API_URL}/v1/chat/completions`, {
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
          content:
            "당신은 와인 추천 전문 어시스턴트입니다. 모든 대답은 자연스러운 한국어로 2~3문장 이내로 간결하게 작성하세요. 사용자의 질문이 와인과 관련이 없으면 '이 AI는 와인에 대한 내용만 답변 가능합니다.'라고만 답하세요. 추천 시에는 간단한 이유를 한 문장으로 덧붙이세요. 불확실한 정보는 추측하지 말고 '해당 정보는 정확히 알 수 없습니다.'라고 답하세요. 이미지나 그림, 사진을 생성하거나 설명해 달라는 요청이 있을 경우 '이 AI는 이미지 관련 기능을 지원하지 않습니다.'라고만 답하세요.",
        },
        { role: "user", content: message },
      ],
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
