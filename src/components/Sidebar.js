import { useEffect, useState } from "react";

const Sidebar = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
  }) => {
    // const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    const sortedNotes = [...notes]
  
    return (
      <div className="app-sidebar">
        <div className="app-sidebar-header">
          <h1>Diary</h1>
          <button className="AddButton" onClick={onAddNote}>Add</button>
        </div>
        <div className="app-sidebar-notes">
          {sortedNotes.map(({ id, title, body, lastModified }, i) => (
            <div
              className={`app-sidebar-note ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
            >
              <div className="sidebar-note-title">
                <strong>{title}</strong>
                <button className="DeleteButton" onClick={(e) => onDeleteNote(id)}>Delete</button>
              </div>
  
              <p>{body && body.substr(0, 100) + "..."}</p>
              <small className="note-meta">
                Last Modified{" "}
                {new Date(lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sidebar;