export const getGradient = (index: number, gradients: string[]): string => {
  if (!gradients || gradients.length === 0) {
    return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  }
  return (
    gradients[index % gradients.length] ??
    gradients[0] ??
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  );
};

export const getFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase();
};
