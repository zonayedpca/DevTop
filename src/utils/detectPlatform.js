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
    if (os.includes("i686")) {
      result = "Linuxi686";
    } else if (os.includes("x86_64")) {
      result = "Linuxx86_64";
    } else {
      result = "Linux";
    }
  } else if (String(os).includes("BSD")) {
    if (os.includes("i386")) {
      result = "FreeBSDi386";
    } else if (os.includes("amd64")) {
      result = "FreeBSDamd64";
    } else {
      result = "FreeBSD";
    }
  } else if (String(os).includes("Mac")) {
    result = "MacOS";
  } else {
    result = "";
  }
  return result;
};
