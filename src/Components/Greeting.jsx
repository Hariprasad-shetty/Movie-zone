function Greeting(){
  let name="john"
  let date= new Date()
  return (
    
    <div>
     <h1>Hello {name}</h1>
     <p>current date: {date.getDate()}</p>
    </div>
  )
}
export default Greeting