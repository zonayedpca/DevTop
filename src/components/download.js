import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  detectPlatform,
  elaboratePlatform,
  createDownloadLink
} from "../utils";

const Download = () => {
  const [info, setInfo] = useState(null);
  const [downloads, setDownloads] = useState("");

  useEffect(() => {
    fetchData();
  }, [info]);

  const platform = detectPlatform();

  const fetchData = async () => {
    if (!info) {
      const {
        data: { data }
      } = await axios("https://devtop.now.sh/latest");
      setInfo(data);
      const version = String(data.tag_name).replace("v", "");
      setDownloads(createDownloadLink(platform, version));
    }
  };

  const platformElab = elaboratePlatform(platform);
  return (
    <div className="download">
      <ul>
        <li>
          <p>DevTop Essentials</p>
          <span>Download Now</span>
        </li>
        <li>
          <p>{info ? info.tag_name : "..."}</p>
          <span>
            {info ? <a href={info.html_url}>See Release Notes</a> : "..."}
          </span>
        </li>
        <li>
          <p>{platformElab}</p>
          <span>Your Platform</span>
        </li>
        <li>
          {downloads ? (
            <>
              <p>
                <a className="btn" href={`${downloads.primary}`}>
                  Download
                </a>
              </p>
              {downloads.secondary && (
                <span>
                  Other:{" "}
                  {Object.keys(downloads.secondary).map(download => (
                    <React.Fragment key={download}>
                      <a key={download} href={downloads.secondary[download]}>
                        {download}
                      </a>{" "}
                    </React.Fragment>
                  ))}
                </span>
              )}
            </>
          ) : (
            <p>Please Wait...</p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Download;
