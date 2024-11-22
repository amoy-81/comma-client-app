type GenerateQueryParams = {
  [x: string]: string | number | boolean;
};

export const generateQueryParams = (params: GenerateQueryParams) => {
  const queryParams = new URLSearchParams(
    Object.entries(params).reduce((acc, [key, value]) => {
      if (value !== undefined && value !== null) {
        acc[key] = String(value);
      }
      return acc;
    }, {} as Record<string, string>)
  ).toString();

  return queryParams;
};
