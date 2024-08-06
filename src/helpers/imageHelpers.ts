export const generateImageSources = (
    mobile: string,
    tablet: string,
    desktop: string
  ) => [
    {
      srcSet: mobile,
      media: "(max-width: 699px)",
      type: "image/jpeg",
    },
    {
      srcSet: tablet,
      media: "(min-width: 700px)",
      type: "image/jpeg",
    },
    {
      srcSet: desktop,
      media: "(min-width: 992px)",
      type: "image/jpeg",
    },
  ];
  