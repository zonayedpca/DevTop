const WINDOWS = ["Win64", "Win32"];
const IOS = ["MacIntel"];
const FREE_BSD = ["FreeBSD", "FreeBSD i386", "FreeBSD amd64"];
const LINUX = ["Linux", "Linux i686", "Linux x86_64"];

const platforms = {
  WINDOWS,
  IOS,
  FREE_BSD,
  LINUX
};

export const detectPlatform = () => {
  const platform = navigator.platform;
  let os = "",
    result = "";
  Object.keys(platforms).forEach(key => {
    platforms[key].forEach(item => {
      if (item === platform) {
        os = platform;
      }
    });
  });
  if (os === "Win32") {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("Win64") !== -1) {
      result = "Win64";
    } else {
      result = "Win32";
    }
  } else if (String(os).includes("Linux")) {
    if (os.includes("64")) {
      result = "Linux64";
    } else {
      result = "Linux32";
    }
  } else if (String(os).includes("BSD")) {
    if (os.includes("64")) {
      result = "FreeBSD64";
    } else {
      result = "FreeBSD32";
    }
  } else if (String(os).includes("Mac")) {
    result = "MacOS";
  } else {
    result = "";
  }
  return result;
};
