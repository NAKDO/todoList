
function TodoCreate({listName, setListName, handleSubmit}) {
    return(
        <form onSubmit={handleSubmit}>
        <div className={'createArea'}>
          <input type='text' name='list' className={'inputText'} placeholder={'Entering to-do list~!'} value={listName} onChange={(event) => 
        setListName(event.target.value)}></input>
          <button className={'btnEnter'}><span className={'arrowIcon'}></span>Enter</button>
        </div>
      </form>
    )
  }
  
  export default TodoCreate;