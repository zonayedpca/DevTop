import React, { useState, useEffect } from "react";
import axios from "axios";

import { detectPlatform, elaboratePlatform } from "../utils";

const Download = () => {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, [info]);

  const fetchData = async () => {
    if (!info) {
      const {
        data: { data }
      } = await axios("https://devtop.now.sh/latest");
      setInfo(data);
    }
    console.log(info);
  };

  const platform = elaboratePlatform(detectPlatform());

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
          <p>{platform}</p>
          <span>Your Platform</span>
        </li>
        <li>
          <p>
            <a className="btn" href="#">
              Download
            </a>
          </p>
          <span>
            <a href="#">Other Downloads</a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Download;
