import { Meta, StoryObj } from "@storybook/nextjs";
import FlavorIconList from "./flavor-icon-list";
import { AromaKey } from "@/types/aroma-type";

const ALL_AROMAS: AromaKey[] = [
  "CHERRY",
  "BERRY",
  "OAK",
  "VANILLA",
  "PEPPER",
  "BAKING",
  "GRASS",
  "APPLE",
  "PEACH",
  "CITRUS",
  "TROPICAL",
  "MINERAL",
  "FLOWER",
  "TOBACCO",
  "EARTH",
  "CHOCOLATE",
  "SPICE",
  "CARAMEL",
  "LEATHER",
  "EMPTY",
];

const meta = {
  title: "Components/FlavorIconList",
  component: FlavorIconList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    aroma: {
      control: {
        type: "check",
      },
      options: ALL_AROMAS,
      description: "향 아이템 키 목록 (AromaKey[])",
    },
  },
} satisfies Meta<typeof FlavorIconList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    aroma: ["BERRY", "FLOWER", "SPICE", "CHOCOLATE"],
  },
};
