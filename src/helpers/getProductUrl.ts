export const getProductUrl = (slug: string): string => {
  const lowerCaseName = slug.toLowerCase();

  const headerRegex = /\bheadphones?\b/;
  const speakerRegex = /\bspeakers?\b/;
  const earphoneRegex = /\bearphones?\b/;

  if (headerRegex.test(lowerCaseName)) {
    return `/headphones/${slug}`;
  } else if (speakerRegex.test(lowerCaseName)) {
    return `/speakers/${slug}`;
  } else if (earphoneRegex.test(lowerCaseName)) {
    return `/earphones/${slug}`;
  } else {
    return '/'; // default case if none of the keywords are found
  }
};
