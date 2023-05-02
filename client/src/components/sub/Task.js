import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faFloppyDisk, faTrashCan, faBan, faSpinner, faCalendarXmark } from '@fortawesome/free-solid-svg-icons'

import './Task.css';

function Task({ text, completed, onComplete, onEdit, taskId, forDelete, onLoading, load, clickedId }) 
{
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEditButtonClick = () => {
    if(completed) return;
    setNewText('');
    setEditing(true);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();  
    if (!newText.trim()) return;
    onEdit(taskId, { task: newText, status: completed });
    setEditing(false);
  };

  const handleCancelClick = () => {
    setNewText(text);
    setEditing(false);
  };

  const handleDeleteClick = () => {
    const shouldDelete = window.confirm('Are you sure you want to delete this task?');
    if (shouldDelete) {
      forDelete(taskId, text);
      setEditing(false);
    }
  };

  const onCompleteOnLoading = (e) => {
    onLoading(true);
    onComplete(e.target.checked);
  };

  let editIcon = <FontAwesomeIcon icon={faPenToSquare} />;
  let saveIcon = <FontAwesomeIcon icon={faFloppyDisk} shake />;
  let deleteIcon = <FontAwesomeIcon icon={faTrashCan} shake />;
  let cancelIcon = <FontAwesomeIcon icon={faBan} shake />;
  let loadingIcon = <FontAwesomeIcon icon={faSpinner} spinPulse />;
  let deleteIcon2 = <FontAwesomeIcon icon={faCalendarXmark} />;

  return (
    <div className={completed ? 'tasks2' : 'tasks'}>
      <input className='checkBox' type="checkbox" checked={completed} onChange={onCompleteOnLoading} disabled={clickedId === taskId ? load : ''}/>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' , color: completed ? 'darkred' : 'black' }}>  {text}</span>
      <button className='btn-edit' onClick={handleEditButtonClick} hidden={editing||completed}>Edit {editIcon}</button>
      <button className='btn-delete2' type='button' onClick={handleDeleteClick} hidden={!completed}>Delete {deleteIcon2}</button>
      {editing && (
        <form className='editForm' onSubmit={handleFormSubmit}>
          <input type="text" value={newText} onChange={e => setNewText(e.target.value)}/>
          <button className='btn-save' type="submit">{saveIcon} Save</button>
          <button className='btn-cancel' type="button" onClick={handleCancelClick}>{cancelIcon} Cancel</button>
          <button className='btn-delete' type="button" onClick={handleDeleteClick}>{deleteIcon} Delete</button>
        </form>
      )} 
      {clickedId === taskId && load ? loadingIcon : ''}
    </div>
  );
}

export default Task;
