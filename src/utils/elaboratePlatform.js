const platforms = {
  Win64: "Windows (64-bit)",
  Win32: "Windows (32-bit)",
  MacOS: "MacOS",
  FreeBSD: "FreeBSD",
  FreeBSDi386: "FreeBSD (32-bit)",
  FreeBSDamd64: "FreeBSD (64-bit)",
  Linux: "Linux",
  Linuxi686: "Linux (32-bit)",
  Linuxx86_64: "Linux (64-bit)"
};

export const elaboratePlatform = platform => {
  if (!platform) {
    return `Not Found!`;
  }
  return platforms[platform];
};
