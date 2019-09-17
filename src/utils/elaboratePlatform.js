const platforms = {
  Win64: "Windows (64-bit)",
  Win32: "Windows (32-bit)",
  Linux64: "Linux (64-bit)",
  Linux32: "Windows (32-bit)",
  FreeBSD64: "FreeBSD (64-bit)",
  FreeBSD32: "FreeBSD (32-bit)",
  MacOS: "MacOS"
};

export const elaboratePlatform = platform => {
  if (!platform) {
    return `Not Found!`;
  }
  return platforms[platform];
};
