import React from 'react'

export default React.memo(function ToDo({ id = '', name = '', onClickRemove = ''}) {
  console.log(`Re-Render >>> ToDo: ${id}`)
  return (
    <li style = {{margin: '2px'}}>
      {name}
      <button 
          onClick={onClickRemove} value={id} 
          style={{margin: '2px 10px'}}
        > 
        DONE 
        </button>
    </li>
  )
})
