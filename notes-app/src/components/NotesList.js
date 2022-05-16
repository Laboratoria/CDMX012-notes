import React from 'react'

function NotesList({ allNotes }) {
  return (
    <div>
      <ul>
      {allNotes.map((individualNote) =>(
        <li>MyNote#1</li>
      ))}
      </ul>
    </div>
  )
}
export default NotesList;