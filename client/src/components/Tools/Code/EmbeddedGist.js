import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ShowBox } from '../../common';

class EmbeddedGist extends Component {
  constructor(props) {
      super(props);
      this.gist = props.gist;
      this.file = props.file;
      this.stylesheetAdded = false;
      this.state = {
        loading: true,
        src: ""
      };
  }

  addStylesheet = (href) => {
    if (!this.stylesheetAdded) {
      this.stylesheetAdded = true;
      var link = document.createElement('link');
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  }

  componentDidMount() {
    var gistCallback = EmbeddedGist.nextGistCallback();
    window[gistCallback] = function(gist) {
        this.setState({
          loading: false,
          src: gist.div
        });
        this.addStylesheet(gist.stylesheet);
    }.bind(this);

    var url = "https://gist.github.com/" + this.props.gist + ".json?callback=" + gistCallback;
    if (this.props.file) {
      url += "&file=" + this.props.file;
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.head.appendChild(script);
  }

  render() {
    if (this.state.loading) {
      return (
        <ShowBox>
          <p>Loading...</p>
        </ShowBox>
      );
    } else {
      return <div dangerouslySetInnerHTML={{__html: this.state.src}} />;
    }
  }
}

EmbeddedGist.propTypes = {
    gist: PropTypes.string.isRequired,
    file: PropTypes.string
};

var gistCallbackId = 0;

EmbeddedGist.nextGistCallback = () => {
    return "embed_gist_callback_" + gistCallbackId++;
};

export default EmbeddedGist;
