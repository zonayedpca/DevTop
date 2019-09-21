const DOWNLOAD_URL = `https://github.com/zonayedpca/DevTop/releases/download/v`;
// 0.8.0-beta/DevTop-0.8.0-beta-win.exe

const downloads = {
  Win32: {
    primary: "DevTop-%version%-win.exe",
    secondary: {
      portable: "DevTop-%version%-win-ia32.zip"
    }
  },
  Win64: {
    primary: "DevTop-%version%-win.exe",
    secondary: {
      portable: "DevTop-%version%-win-x64.zip"
    }
  },
  MacIntel: {
    primary: "DevTop-%version%-mac.dmg",
    secondary: {
      pkg: "DevTop-%version%-mac.pkg",
      zip: "DevTop-%version%-mac.zip"
    }
  },
  FreeBSD: {
    primary: "DevTop-%version%-linux-i386.AppImage",
    secondary: {
      // eslint-disable-next-line no-useless-computed-key
      ["tar-gz"]: "DevTop-%version%-linux-ia32.tar.gz",
      zip: "DevTop-%version%-linux-ia32.zip"
    }
  },
  // eslint-disable-next-line no-useless-computed-key
  ["FreeBSD i386"]: {
    primary: "DevTop-%version%-linux-i386.AppImage",
    secondary: {
      // eslint-disable-next-line no-useless-computed-key
      ["tar-gz"]: "DevTop-%version%-linux-ia32.tar.gz",
      zip: "DevTop-%version%-linux-ia32.zip"
    }
  },
  // eslint-disable-next-line no-useless-computed-key
  ["FreeBSD amd64"]: {
    primary: "DevTop-%version%-linux-x86_64.AppImage",
    secondary: {
      // eslint-disable-next-line no-useless-computed-key
      ["tar-gz"]: "DevTop-%version%-linux-x64.tar.gz",
      zip: "DevTop-%version%-linux-x64.zip"
    }
  },
  Linux: {
    primary: "DevTop-%version%-linux-i386.AppImage",
    secondary: {
      // eslint-disable-next-line no-useless-computed-key
      ["tar-gz"]: "DevTop-%version%-linux-ia32.tar.gz",
      zip: "DevTop-%version%-linux-ia32.zip"
    }
  },
  // eslint-disable-next-line no-useless-computed-key
  ["Linux i686"]: {
    primary: "DevTop-%version%-linux-i386.deb",
    secondary: {
      // eslint-disable-next-line no-useless-computed-key
      ["tar-gz"]: "DevTop-%version%-linux-ia32.tar.gz",
      zip: "DevTop-%version%-linux-ia32.zip"
    }
  },
  // eslint-disable-next-line no-useless-computed-key
  ["Linux x86_64"]: {
    primary: "DevTop-%version%-linux-amd64.deb",
    secondary: {
      // eslint-disable-next-line no-useless-computed-key
      ["tar-gz"]: "DevTop-%version%-linux-x64.tar.gz",
      zip: "DevTop-%version%-linux-x64.zip"
    }
  }
};

export const createDownloadLink = (platform, version) => {
  const platformKeys = Object.keys(downloads);
  if (!platformKeys.includes(platform)) {
    return {
      primary: `https://github.com/zonayedpca/DevTop/releases/tag/v${version}`
    };
  }
  const secondaryLinks = {};
  Object.keys(downloads[platform].secondary).forEach(item => {
    secondaryLinks[item] = `${DOWNLOAD_URL}${version}/${downloads[
      platform
    ].secondary[item].replace("%version%", version)}`;
  });
  const platformLink = {
    primary: `${DOWNLOAD_URL}${version}/${downloads[platform].primary.replace(
      "%version%",
      version
    )}`,
    secondary: secondaryLinks
  };
  return platformLink;
};
