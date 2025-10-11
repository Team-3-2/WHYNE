export function parseQueryParams(params: URLSearchParams) {
  const getStringParam = (key: string): string | undefined => {
    const value = params.get(key);
    return value ? value : undefined;
  };

  const getNumberParam = (key: string): number | undefined => {
    const value = params.get(key);
    return value ? parseFloat(value) : undefined;
  };

  return {
    type: getStringParam("type")?.toUpperCase(),
    rating: getNumberParam("rating"),
    maxPrice: getNumberParam("maxPrice"),
    minPrice: getNumberParam("minPrice"),
  };
}
