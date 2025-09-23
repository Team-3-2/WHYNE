export default function Home() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* 제목 */}
        <header className="text-center">
          <h1 className="text-title-hero text-primary-1000 mb-4">
            SF Pro 폰트 & 커스텀 컬러 테스트
          </h1>
          <p className="text-body-md text-gray-600">
            피그마 디자인 시스템 적용 확인
          </p>
        </header>

        {/* 폰트 타이포그래피 테스트 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">
            📝 Typography (SF Pro 폰트)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Title 스타일 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Title 스타일</h3>
              <div className="space-y-2">
                <h1 className="text-title-hero text-primary-1000">
                  Title Hero (32px Bold)
                </h1>
                <h1 className="text-title-page-md text-primary-1000">
                  Title Page MD (40px Bold)
                </h1>
                <h1 className="text-title-page-sm text-primary-1000">
                  Title Page SM (32px Bold)
                </h1>
              </div>
            </div>

            {/* Heading 스타일 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Heading 스타일</h3>
              <div className="space-y-2">
                <h2 className="text-heading-lg text-primary-1000">
                  Heading LG (24px SemiBold)
                </h2>
                <h3 className="text-heading-md text-primary-1000">
                  Heading MD (20px Bold)
                </h3>
                <h4 className="text-heading-sm text-primary-1000">
                  Heading SM (18px Bold)
                </h4>
              </div>
            </div>

            {/* Body 스타일 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Body 스타일</h3>
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

            {/* Caption & Component */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Caption & Component</h3>
              <div className="space-y-2">
                <p className="text-caption text-gray-600">
                  Caption (12px Regular) - 나만의 와인창고, Whyne
                </p>
                <p className="text-component-notes-md text-gray-600">
                  Component Notes MD (12px Regular)
                </p>
                <p className="text-component-notes-sm text-gray-600">
                  Component Notes SM (10px Regular)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 커스텀 색상 테스트 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">
            🎨 Custom Colors (피그마 색상)
          </h2>
          
          {/* 기본 색상 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">기본 색상</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-black text-white p-6 rounded-lg text-center">
                <div className="font-bold">Black</div>
                <div className="text-sm mt-2">#1A1918</div>
              </div>
              <div className="bg-white border-2 border-gray-300 text-black p-6 rounded-lg text-center">
                <div className="font-bold">White</div>
                <div className="text-sm mt-2">#FFFFFF</div>
              </div>
              <div className="bg-primary-1000 text-white p-6 rounded-lg text-center">
                <div className="font-bold">Primary</div>
                <div className="text-sm mt-2">#1A1918</div>
              </div>
            </div>
          </div>

          {/* 그레이 스케일 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">그레이스케일</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-100 text-black p-6 rounded-lg text-center border">
                <div className="font-bold">Gray 100</div>
                <div className="text-sm mt-2">#FAFAFA</div>
              </div>
              <div className="bg-gray-300 text-black p-6 rounded-lg text-center">
                <div className="font-bold">Gray 300</div>
                <div className="text-sm mt-2">#D1D1D1</div>
              </div>
              <div className="bg-gray-600 text-white p-6 rounded-lg text-center">
                <div className="font-bold">Gray 600</div>
                <div className="text-sm mt-2">#8C8C8B</div>
              </div>
              <div className="bg-gray-800 text-white p-6 rounded-lg text-center">
                <div className="font-bold">Gray 800</div>
                <div className="text-sm mt-2">#484746</div>
              </div>
            </div>
          </div>
        </section>

        {/* 버튼 테스트 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">
            🔘 Button 스타일 테스트
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="text-button-lg bg-primary-1000 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Button Large (16px Bold)
            </button>
            <button className="text-button-md bg-gray-600 text-white px-4 py-2 rounded hover:opacity-90 transition-opacity">
              Button Medium (14px Bold)
            </button>
            <button className="text-button-md bg-white border-2 border-primary-1000 text-primary-1000 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
              Outline Button
            </button>
            <button className="text-button-lg bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Light Button
            </button>
          </div>
        </section>

        {/* 실제 사용 예시 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">
            🍷 실제 사용 예시
          </h2>
          <div className="bg-gray-100 rounded-xl p-8">
            <div className="text-center">
              <h1 className="text-title-hero text-primary-1000 mb-4">
                나만의 와인창고, Whyne
              </h1>
              <p className="text-body-lg text-gray-600 mb-6">
                프리미엄 와인 컬렉션을 관리하고 공유하세요
              </p>
              <div className="flex justify-center gap-4">
                <button className="text-button-lg bg-primary-1000 text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity">
                  시작하기
                </button>
                <button className="text-button-lg bg-white border-2 border-primary-1000 text-primary-1000 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors">
                  더 알아보기
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
