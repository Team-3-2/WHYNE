export default function Home() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* 제목 */}
        <header className="text-center">
          <h1 className="mb-4 text-title-hero text-primary">
            SF Pro 폰트 & 커스텀 컬러 테스트
          </h1>
          <p className="text-body-md text-gray600">
            피그마 디자인 시스템 적용 확인
          </p>
        </header>

        {/* 폰트 타이포그래피 테스트 */}
        <section>
          <h2 className="mb-6 border-b border-gray300 pb-2 text-2xl font-bold text-gray800">
            📝 Typography (SF Pro 폰트)
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Title 스타일 */}
            <div className="space-y-4">
              <h3 className="text-gray700 mb-3 text-lg font-semibold">
                Title 스타일
              </h3>
              <div className="space-y-2">
                <h1 className="text-title-hero text-primary">
                  Title Hero (32px Bold)
                </h1>
                <h1 className="text-title-page-md text-primary">
                  Title Page MD (40px Bold)
                </h1>
                <h1 className="text-title-page-sm text-primary">
                  Title Page SM (32px Bold)
                </h1>
              </div>
            </div>

            {/* Heading 스타일 */}
            <div className="space-y-4">
              <h3 className="text-gray700 mb-3 text-lg font-semibold">
                Heading 스타일
              </h3>
              <div className="space-y-2">
                <h2 className="text-heading-lg text-primary">
                  Heading LG (24px SemiBold)
                </h2>
                <h3 className="text-heading-md text-primary">
                  Heading MD (20px Bold)
                </h3>
                <h4 className="text-heading-sm text-primary">
                  Heading SM (18px Bold)
                </h4>
              </div>
            </div>

            {/* Body 스타일 */}
            <div className="space-y-4">
              <h3 className="text-gray700 mb-3 text-lg font-semibold">
                Body 스타일
              </h3>
              <div className="space-y-2">
                <p className="text-body-lg text-gray800">
                  Body Large (18px SemiBold) - 나만의 와인창고, Whyne
                </p>
                <p className="text-body-md text-gray600">
                  Body Medium (16px Medium) - 나만의 와인창고, Whyne
                </p>
                <p className="text-body-sm text-gray600">
                  Body Small (14px Medium) - 나만의 와인창고, Whyne
                </p>
              </div>
            </div>

            {/* Caption & Component */}
            <div className="space-y-4">
              <h3 className="text-gray700 mb-3 text-lg font-semibold">
                Caption & Component
              </h3>
              <div className="space-y-2">
                <p className="text-caption text-gray600">
                  Caption (12px Regular) - 나만의 와인창고, Whyne
                </p>
                <p className="text-component-notes-md text-gray600">
                  Component Notes MD (12px Regular)
                </p>
                <p className="text-component-notes-sm text-gray600">
                  Component Notes SM (10px Regular)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 커스텀 색상 테스트 */}
        <section>
          <h2 className="mb-6 border-b border-gray300 pb-2 text-2xl font-bold text-gray800">
            🎨 Custom Colors (피그마 색상)
          </h2>

          {/* 기본 색상 */}
          <div className="mb-8">
            <h3 className="text-gray700 mb-4 text-lg font-semibold">
              기본 색상
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-black p-6 text-center text-white">
                <div className="font-bold">Black</div>
                <div className="mt-2 text-sm">#1A1918</div>
              </div>
              <div className="rounded-lg border-2 border-gray300 bg-white p-6 text-center text-black">
                <div className="font-bold">White</div>
                <div className="mt-2 text-sm">#FFFFFF</div>
              </div>
              <div className="rounded-lg bg-primary p-6 text-center text-white">
                <div className="font-bold">Primary</div>
                <div className="mt-2 text-sm">#1A1918</div>
              </div>
            </div>
          </div>

          {/* 그레이 스케일 */}
          <div className="mb-8">
            <h3 className="text-gray700 mb-4 text-lg font-semibold">
              그레이스케일
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg border bg-gray100 p-6 text-center text-black">
                <div className="font-bold">Gray 100</div>
                <div className="mt-2 text-sm">#FAFAFA</div>
              </div>
              <div className="rounded-lg bg-gray300 p-6 text-center text-black">
                <div className="font-bold">Gray 300</div>
                <div className="mt-2 text-sm">#D1D1D1</div>
              </div>
              <div className="rounded-lg bg-gray600 p-6 text-center text-white">
                <div className="font-bold">Gray 600</div>
                <div className="mt-2 text-sm">#8C8C8B</div>
              </div>
              <div className="rounded-lg bg-gray800 p-6 text-center text-white">
                <div className="font-bold">Gray 800</div>
                <div className="mt-2 text-sm">#484746</div>
              </div>
            </div>
          </div>
        </section>

        {/* 버튼 테스트 */}
        <section>
          <h2 className="mb-6 border-b border-gray300 pb-2 text-2xl font-bold text-gray800">
            🔘 Button 스타일 테스트
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-lg bg-primary px-6 py-3 text-button-lg text-white transition-opacity hover:opacity-90">
              Button Large (16px Bold)
            </button>
            <button className="rounded bg-gray600 px-4 py-2 text-button-md text-white transition-opacity hover:opacity-90">
              Button Medium (14px Bold)
            </button>
            <button className="rounded border-2 border-primary bg-white px-4 py-2 text-button-md text-primary transition-colors hover:bg-gray100">
              Outline Button
            </button>
            <button className="rounded-lg bg-gray100 px-6 py-3 text-button-lg text-gray800 transition-colors hover:bg-gray300">
              Light Button
            </button>
          </div>
        </section>

        {/* 실제 사용 예시 */}
        <section>
          <h2 className="mb-6 border-b border-gray300 pb-2 text-2xl font-bold text-gray800">
            🍷 실제 사용 예시
          </h2>
          <div className="rounded-xl bg-gray100 p-8">
            <div className="text-center">
              <h1 className="mb-4 text-title-hero text-primary">
                나만의 와인창고, Whyne
              </h1>
              <p className="mb-6 text-body-lg text-gray600">
                프리미엄 와인 컬렉션을 관리하고 공유하세요
              </p>
              <div className="flex justify-center gap-4">
                <button className="rounded-lg bg-primary px-8 py-4 text-button-lg text-white transition-opacity hover:opacity-90">
                  시작하기
                </button>
                <button className="rounded-lg border-2 border-primary bg-white px-8 py-4 text-button-lg text-primary transition-colors hover:bg-gray100">
                  더 알아보기
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
