export const isCurrentPage = (pathname: string, linkUrl: string): boolean => {
  const regex = new RegExp(`^${linkUrl}(/|$)`); // Match the exact or sub-path
  return regex.test(pathname);
};
