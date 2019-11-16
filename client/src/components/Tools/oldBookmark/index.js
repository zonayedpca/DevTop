import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiTrash2 } from 'react-icons/fi';

import Add from './Add';
import Content from './Content';
import { Head, ShowBox } from '../../common';

import { removeBookmark, removeAllBookmark } from '../../../actions';

import './index.css';

class Bookmark extends Component {
    renderContent = () => {
        const { bookmarks } = this.props;
        if (!bookmarks.length) {
            return (
                <ShowBox>
                    <p>Nothing to Show</p>
                </ShowBox>
            );
        }
        return bookmarks.map(bookmark => (
            <Content
                key={bookmark.id}
                data={bookmark}
                onRemove={this.onRemove.bind(this, bookmark.id)}
            />
        ));
    };

    onRemove = id => {
        const { removeBookmark } = this.props;
        removeBookmark(id);
    };

    onRemoveAll = () => {
        const { removeAllBookmark } = this.props;
        removeAllBookmark();
    };

    render() {
        return (
            <div className="bookmark-area">
                <Head title="Bookmark">
                    <li
                        onClick={this.onRemoveAll.bind(this)}
                        className="remove"
                    >
                        <FiTrash2 />
                    </li>
                </Head>
                <Add />
                <div className="bookmark-content">{this.renderContent()}</div>
            </div>
        );
    }
}

export default connect(
    ({ bookmarks }) => ({ bookmarks }),
    { removeBookmark, removeAllBookmark }
)(Bookmark);
