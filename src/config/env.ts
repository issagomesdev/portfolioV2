export const env = {
  apiUrl: import.meta.env.VITE_API_URL as string,
  cvEndpoint: import.meta.env.VITE_CV_ENDPOINT as string | undefined,
} as const;
