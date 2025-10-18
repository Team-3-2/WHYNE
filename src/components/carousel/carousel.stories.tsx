import type { Meta, StoryObj } from "@storybook/nextjs";
import { CAROUSEL_BREAKPOINTS } from "@/constants/responsive";
import Carousel from "./carousel";
import RecommendCard from "@/app/wines/_components/wine-recommended/recommend-card";

const recommendwinemock = [
  {
    id: 1,
    name: "Test Wine 4",
    region: "France",
    image:
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1558/1750568547760/image-wine4.png",
    price: 60000,
    type: "RED",
    avgRating: 4.5,
    reviewCount: 10,
    recentReview: {
      id: 3033,
      rating: 5,
      lightBold: 9,
      smoothTannic: 1,
      drySweet: 9,
      softAcidic: 2,
      aroma: ["VANILLA", "OAK", "BERRY", "PEPPER", "BAKING"],
      content: "This Wine is very good.",
      createdAt: "2025-06-23T04:57:26.940Z",
      updatedAt: "2025-06-23T04:58:40.264Z",
      user: {
        id: 1611,
        nickname: "tester4001",
        image:
          "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1611/1750654695906/profile.webp",
      },
      likes: [
        {
          user: {
            id: 1623,
          },
        },
        {
          user: {
            id: 1624,
          },
        },
        {
          user: {
            id: 1613,
          },
        },
      ],
    },
  },
  {
    id: 1103,
    name: "이미지 자체가 없거나 빈 경우",
    region: "Tuscany, Italy",
    image: "",
    price: 50000,
    type: "RED",
    avgRating: 4.33,
    reviewCount: 3,
    recentReview: {
      id: 2936,
      rating: 2,
      lightBold: 1,
      smoothTannic: 2,
      drySweet: 8,
      softAcidic: 3,
      aroma: ["VANILLA", "EARTH", "BERRY"],
      content: "제 타입은 아닙니다.",
      createdAt: "2025-06-22T09:27:53.011Z",
      updatedAt: "2025-06-22T09:40:23.236Z",
      user: {
        id: 1561,
        nickname: "2222",
        image:
          "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1561/1750585145127/wine1.jpg",
      },
      likes: [],
    },
  },
  {
    id: 1110,
    name: "Bollinger La Grande Année",
    region: "Champagne, France",
    image:
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1435/1750149116306/19.png",
    price: 55000,
    type: "WHITE",
    avgRating: 4.33,
    reviewCount: 3,
    recentReview: {
      id: 3564,
      rating: 5,
      lightBold: 2,
      smoothTannic: 9,
      drySweet: 2,
      softAcidic: 10,
      aroma: ["OAK", "BAKING", "MINERAL", "LEATHER"],
      content: "후기",
      createdAt: "2025-09-10T14:29:16.781Z",
      updatedAt: "2025-09-10T14:29:16.781Z",
      user: {
        id: 1875,
        nickname: "wwww18012",
        image: null,
      },
      likes: [],
    },
  },
  {
    id: 1294,
    name: "Château Margaux",
    region: "Champagne, France",
    image:
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1569/1750597205053/82b3bb60-d0e8-4642-823a-5814a43b8f01.png",
    price: 90000,
    type: "RED",
    avgRating: 5,
    reviewCount: 0,
    recentReview: null,
  },
  {
    id: 1098,
    name: "Château Mouton Rothschild",
    region: "Pauillac, France",
    image:
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1435/1750148146171/5.png",
    price: 78000,
    type: "RED",
    avgRating: 5,
    reviewCount: 1,
    recentReview: {
      id: 2607,
      rating: 5,
      lightBold: 5,
      smoothTannic: 4,
      drySweet: 1,
      softAcidic: 3,
      aroma: ["BERRY", "MINERAL"],
      content:
        "샤토 무통 로칠드, 이거 진짜 물건이에요! 진한 베리향에 미네랄 느낌이 더해져서 엄청 꽉 찬 느낌이에요. 마시면서 '와~' 소리가 절로 나왔네요.",
      createdAt: "2025-06-18T07:44:27.578Z",
      updatedAt: "2025-06-18T07:44:27.578Z",
      user: {
        id: 1452,
        nickname: "단게좋아",
        image:
          "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1452/1750645777655/icon_link.png",
      },
      likes: [],
    },
  },
  {
    id: 1099,
    name: "Château Cheval Blanc",
    region: "Saint-Émilion, France",
    image:
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1435/1750148190688/6.png",
    price: 82000,
    type: "RED",
    avgRating: 4.67,
    reviewCount: 2,
    recentReview: {
      id: 2606,
      rating: 5,
      lightBold: 5,
      smoothTannic: 4,
      drySweet: 1,
      softAcidic: 4,
      aroma: ["LEATHER", "SPICE"],
      content:
        "샤토 슈발 블랑은 가죽이랑 스파이스 향이 동시에 느껴지는 게 되게 멋있어요. 마시고 나서도 여운이 길게 남아서 계속 생각나네요. 진짜 강추!",
      createdAt: "2025-06-18T07:44:23.969Z",
      updatedAt: "2025-06-18T07:44:23.969Z",
      user: {
        id: 1452,
        nickname: "단게좋아",
        image:
          "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1452/1750645777655/icon_link.png",
      },
      likes: [],
    },
  },
  {
    id: 1276,
    name: "Test Wine 4",
    region: "France",
    image:
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1558/1750568547760/image-wine4.png",
    price: 60000,
    type: "RED",
    avgRating: 4.5,
    reviewCount: 10,
    recentReview: {
      id: 3033,
      rating: 5,
      lightBold: 9,
      smoothTannic: 1,
      drySweet: 9,
      softAcidic: 2,
      aroma: ["VANILLA", "OAK", "BERRY", "PEPPER", "BAKING"],
      content: "This Wine is very good.",
      createdAt: "2025-06-23T04:57:26.940Z",
      updatedAt: "2025-06-23T04:58:40.264Z",
      user: {
        id: 1611,
        nickname: "tester4001",
        image:
          "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1611/1750654695906/profile.webp",
      },
      likes: [
        {
          user: {
            id: 1623,
          },
        },
        {
          user: {
            id: 1624,
          },
        },
        {
          user: {
            id: 1613,
          },
        },
      ],
    },
  },
  {
    id: 1660,
    name: "갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 갈비찜 ",
    region:
      "한국 한국 한국 한국 한국 한국 한국 한국 한국 한국 한국 한국 한국 한국",
    image:
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1875/1757514585126/03d962d3-06b6-4c18-b0ca-01d22c49737d.jpg",
    price: 1234567,
    type: "RED",
    avgRating: 5,
    reviewCount: 1,
    recentReview: {
      id: 3565,
      rating: 5,
      lightBold: 10,
      smoothTannic: 0,
      drySweet: 8,
      softAcidic: 0,
      aroma: ["MINERAL", "CHOCOLATE"],
      content: "맛있어요",
      createdAt: "2025-09-10T14:30:25.737Z",
      updatedAt: "2025-09-10T14:30:25.737Z",
      user: {
        id: 1875,
        nickname: "wwww18012",
        image: null,
      },
      likes: [],
    },
  },
];

const wines = recommendwinemock;

const meta: Meta<typeof Carousel> = {
  title: "공통 컴포넌트/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    navigationEnabled: {
      control: "boolean",
      description: "네비게이션 버튼 표시 여부",
    },
    draggableScrollbar: {
      control: "boolean",
      description: "드래그 가능한 스크롤바 표시 여부",
    },
    className: {
      control: "text",
      description: "캐러셀 컨테이너에 추가할 클래스명",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BreakpointsDefault: Story = {
  args: {
    navigationEnabled: true,
    draggableScrollbar: true,
  },
  render: (args) => (
    <div className="p-6">
      <h3 className="mb-4 text-xl font-bold">기본 샘플 (테스트용)</h3>
      <Carousel breakpoints={CAROUSEL_BREAKPOINTS.default}>
        {wines.map((wine) => (
          <RecommendCard key={wine.id} wine={wine} />
        ))}
      </Carousel>
    </div>
  ),
};

export const BreakpointsRecommendWine: Story = {
  args: {
    navigationEnabled: true,
    draggableScrollbar: true,
  },
  render: (args) => (
    <div className="p-6">
      <h3 className="mb-2 text-xl font-bold">이 달의 추천 와인</h3>
      <Carousel breakpoints={CAROUSEL_BREAKPOINTS.recommendWine}>
        {wines.map((wine) => (
          <RecommendCard key={wine.id} wine={wine} />
        ))}
      </Carousel>
    </div>
  ),
};
