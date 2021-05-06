/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const List = ({
  id,
  name,
  author,
  category,
  chapters,
  currentChapter,
  onDelete,
  chapterTitle,
}) => {
  const percentageread = Math.floor((currentChapter / chapters) * 100);
  return (
    <div className="card z-depth-2 row .card-fixer valign-wrapper">
      <div className="col s7">
        <div className="card-info">
          <h6 className="header grey-text text-lighten-1">{category}</h6>
          <h5 className="header grey-text text-darken-4">{name}</h5>
          <p className="blue-text text-lighten-3">{author}</p>
        </div>

        <div className="buttons-container">
          <a href="!#" className="btn-flat blue-text text-lighten-3">
            Comments
          </a>
          <a
            href="#!"
            onClick={() => onDelete(id)}
            className="btn-flat blue-text text-lighten-3"
          >
            Remove
          </a>
          <a href="!#" className="btn-flat blue-text text-lighten-3">
            Edit
          </a>
        </div>
      </div>
      <div className="col s5 row">
        <div className="col s6">
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar
              value={percentageread}
              text={`${percentageread}%`}
            />
          </div>
        </div>
        <div className="col s6">
          <p>{chapterTitle}</p>
          <p>
            Chapter
            <span>{currentChapter}</span>
          </p>
          <button className="waves-effect waves-light btn blue" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  chapters: PropTypes.number.isRequired,
  currentChapter: PropTypes.number.isRequired,
  chapterTitle: PropTypes.string.isRequired,
};

export default List;
