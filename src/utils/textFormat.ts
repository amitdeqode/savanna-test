export const removeUnderscore = (str: string): string => {
  const newStr = str.replace(/_/g, ' ');
  return newStr;
};
