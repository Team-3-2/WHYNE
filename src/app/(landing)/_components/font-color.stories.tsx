import { Meta, StoryObj } from "@storybook/nextjs";
import { sfPro } from "@/app/fonts";

const meta: Meta = {
  title: "프로젝트 세팅/폰트 & 컬러",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

const primaryPalette = [
  { name: "Black", value: "#1A1918", className: "bg-black text-white" },
  { name: "Primary", value: "#1A1918", className: "bg-primary text-white" },
  {
    name: "White",
    value: "#FFFFFF",
    className: "bg-white text-black border border-gray-300",
  },
  { name: "Default", value: "#31302F", className: "bg-default text-white" },
  { name: "Secondary", value: "#A3A3A3", className: "bg-secondary text-white" },
  {
    name: "BgGray350",
    value: "rgba(217,217,217,0.2)",
    className:
      "bg-[rgba(217,217,217,0.2)] text-gray-900 border border-gray-300",
  },
];

const grayScale = [
  { shade: 100, hex: "#FAFAFA" },
  { shade: 150, hex: "#F7F7F7" },
  { shade: 200, hex: "#F2F2F2" },
  { shade: 300, hex: "#D1D1D1" },
  { shade: 400, hex: "#BABABA" },
  { shade: 500, hex: "#A3A3A3" },
  { shade: 600, hex: "#8C8C8B" },
  { shade: 700, hex: "#374151" },
  { shade: 800, hex: "#484746" },
  { shade: 850, hex: "#373737" },
  { shade: 900, hex: "#31302F" },
  { shade: 950, hex: "#2D3034" },
  { shade: 1000, hex: "#1E1E1E" },
  { shade: 1050, hex: "#14171C" },
  { shade: 1100, hex: "#101318" },
];

const accents = [
  { label: "Red 100", className: "bg-red-100" },
  { label: "Red 200", className: "bg-red-200" },
  { label: "Red 300", className: "bg-red-300" },
  { label: "Red 400", className: "bg-red-400" },
  { label: "Purple 100", className: "bg-purple-100" },
  { label: "Purple 200", className: "bg-purple-200" },
];

const screenInfo = [
  { label: "mobile", value: "≤ 743px" },
  { label: "tablet", value: "744px – 1279px" },
  { label: "pc", value: "≥ 1280px" },
];

export const FontColor: Story = {
  render: () => (
    <main className={`${sfPro.className} min-h-screen bg-white p-8`}>
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="text-center">
          <h1 className="text-primary-1000 mb-4 text-title-hero">
            SF Pro 폰트 & 커스텀 컬러 테스트
          </h1>
        </header>

        <section className="space-y-6">
          <h2 className="border-b border-gray-300 pb-2 text-2xl font-bold text-gray-800">
            Typography (SF Pro)
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Title</h3>
              <div className="space-y-2">
                <h1 className="text-primary-1000 text-title-hero">
                  Title Hero (32px Bold)
                </h1>
                <h1 className="text-primary-1000 text-title-page-md">
                  Title Page MD (40px Bold)
                </h1>
                <h1 className="text-primary-1000 text-title-page-sm">
                  Title Page SM (32px Bold)
                </h1>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Heading</h3>
              <div className="space-y-2">
                <h2 className="text-primary-1000 text-heading-lg">
                  Heading LG (24px SemiBold)
                </h2>
                <h3 className="text-primary-1000 text-heading-md">
                  Heading MD (20px Bold)
                </h3>
                <h4 className="text-primary-1000 text-heading-sm">
                  Heading SM (18px Bold)
                </h4>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Body</h3>
              <div className="space-y-2">
                <p className="text-body-lg text-gray-800">
                  Body Large (18px SemiBold) - 나만의 와인창고, Whyne
                </p>
                <p className="text-body-md text-gray-600">
                  Body Medium (16px Medium) - 나만의 와인창고, Whyne
                </p>
                <p className="text-body-sm text-gray-600">
                  Body Small (14px Medium) - 나만의 와인창고, Whyne
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Caption & Component
              </h3>
              <div className="space-y-2">
                <p className="text-caption text-gray-600">
                  Caption (12px Regular)
                </p>
                <p className="text-component-notes-md text-gray-600">
                  Component Notes MD (12px Regular)
                </p>
                <p className="text-component-notes-sm text-gray-600">
                  Component Notes SM (10px Regular)
                </p>
              </div>
              <div className="space-y-2">
                <button className="bg-primary-1000 rounded px-4 py-2 text-button-md text-white">
                  Button MD
                </button>
                <button className="bg-primary-1000 rounded-lg px-6 py-3 text-button-lg text-white">
                  Button LG
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="border-b border-gray-300 pb-2 text-2xl font-bold text-gray-800">
            Tailwind Custom Colors
          </h2>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-700">
              기본 팔레트
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {primaryPalette.map(({ name, value, className }) => (
                <div
                  key={name}
                  className={`rounded-lg p-6 text-center shadow-sm ${className}`}
                >
                  <div className="font-bold">{name}</div>
                  <div className="mt-2 text-sm">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-700">
              Grayscale
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {grayScale.map(({ shade, hex }) => (
                <div
                  key={shade}
                  className="rounded-lg border border-gray-200 p-4 text-center text-sm"
                  style={{
                    backgroundColor: hex,
                    color: shade <= 400 ? "#1A1918" : "#FFFFFF",
                  }}
                >
                  <div className="font-semibold">Gray {shade}</div>
                  <div className="mt-1">{hex}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-700">Accent</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {accents.map(({ label, className }) => (
                <div
                  key={label}
                  className={`rounded-lg p-6 text-center text-white shadow-sm ${className}`}
                >
                  <div className="font-bold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="border-b border-gray-300 pb-2 text-2xl font-bold text-gray-800">
            Breakpoints
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {screenInfo.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-lg border border-gray-200 bg-gray-100 p-6 text-center"
              >
                <div className="text-primary-1000 text-heading-sm">{label}</div>
                <div className="mt-2 text-body-lg">{value}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  ),
};
