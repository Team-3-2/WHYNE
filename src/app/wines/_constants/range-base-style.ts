// input range 스타일

export const RANGE_BASE_STYLE = `
  range-reset absolute z-10 w-full appearance-none bg-transparent focus:outline-none
  [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:cursor-pointer
  [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-gray-600
  [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-md
  [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer
  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
  [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-gray-600
  [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md
  focus:[&::-webkit-slider-thumb]:ring-2 focus:[&::-webkit-slider-thumb]:ring-gray-600
`;
