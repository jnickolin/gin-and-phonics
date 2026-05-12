import '../styles/EditorNote.css';

export default function EditorNote({ label, body, date }) {
  return (
    <div className="editor-note">
      <div className="editor-note__label">{label}</div>
      {body ? (
        <div className="editor-note__content">
          {date && <span className="editor-note__date">{date}</span>}
          <p className="editor-note__body">{body}</p>
        </div>
      ) : (
        <div className="editor-note__empty">
          <span className="editor-note__dot" aria-hidden="true" />
          <span>No note yet.</span>
        </div>
      )}
    </div>
  );
}
