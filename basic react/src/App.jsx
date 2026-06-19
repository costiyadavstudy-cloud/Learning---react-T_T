
let list = [
  {name: 'vardhan', present: true, id: '#1'},
  {name: 'jaatin', present: false, id: '#2'},
  {name: 'chinu', present: true, id: '#3'}
]
  function App(params) {
    let lists = list.map(obj => 
      <li key={obj.id} style={{color: obj.present ? "white" : "red"}}>
        {obj.name}
      </li>
    )
  return (
    <>
    <h1 className="message">my name is {name} !!!!!!!!!!!!!!!!!!!!!!!!!</h1>
    <button> click Me </button>
    <ul>{lists}</ul>
    </>

  ); 
}

export default App
