import React from "react";
import styles from "./comment.module.css";

export const CommentForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const authorVal = e.target[1].value.trim();
    const textVal = e.target[3].value.trim();
    if (!textVal || !authorVal) {
      return;
    }
    props.commentSubmit({ author: authorVal, text: textVal });
    e.target[0].value = '';
    e.target[1].value = '';
    return;
  };
  const filedsetStyles = {
    border: 0,
    margin: 0,
    padding: 0,
  };

  return (
    <form className="comment-form form-group" onSubmit={(e) => handleSubmit(e)}>
      <fieldset className="field-group" style={filedsetStyles}>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Your name" className={styles.inputWrap} />
        </div>
      </fieldset>
      <fieldset className="field-group" style={filedsetStyles}>
        <div className={styles.inputGroup}>
          <textarea className={styles.textareaWrap} placeholder="Add a comment">
          </textarea>
        </div>
      </fieldset>
      <fieldset className="field-group" style={filedsetStyles}>
        <button type="submit" className={styles.commentbtn}>提交</button>
    </fieldset>
    </form>
  );
}
