export const isJsonString = (str: string): boolean => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const formatJson = (data: unknown): string => {
  if (typeof data === 'string') {
    return JSON.stringify(JSON.parse(data as string), null, 2);
  }
  return JSON.stringify(data as object, null, 2);
};

export const getCookie = (name: string) => {
  let matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
