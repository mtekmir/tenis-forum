export const setPagePrefix = (
  page: number,
  keys: any[],
  pageCount: number,
  idx: number,
) => {
  let pagePrefix = page - 3;

  if (keys.length === 8 && idx === 1) {
    pagePrefix = page - 4;
  }

  if (keys.length === 9 && idx === 7) {
    pagePrefix = page + 3;
  }

  if (page < 5) {
    pagePrefix = 6;
  }

  if (pageCount - page < 4) {
    pagePrefix = 16;
  }
  return pagePrefix;
};

export const setKeys = (page: number, pageCount: number) => {
  let keys =
    page - 3 > 2
      ? [
          1,
          '...',
          page - 2,
          page - 1,
          page,
          page + 1,
          page + 2,
          '...',
          pageCount,
        ]
      : [1, 2, 3, '...', pageCount];

  if (pageCount - page < 4) {
    keys = [1, '...', pageCount - 3, pageCount - 2, pageCount - 1, pageCount];
  }

  if (page - 1 < 5) {
    keys = [1, 2, 3, 4, 5, '...', pageCount];
  }
  return keys;
};
