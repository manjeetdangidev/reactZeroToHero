import Welcome from './components/Welcome.tsx'
import UseStateExample from './components/UseState1_Count.tsx'
import UseStateToggleButton from './components/UseState2_ToggleButton.tsx'
import NameForm from './components/UseState3_InputField.tsx'
import UserInfo from './components/UseState4_MultipleStates.tsx'
import TodoList from './components/UseState5_ArrayState_AddToList.tsx'
import UseEffect1_Timer from './components/UseEffect1_Timer.tsx'
function App() {
  return (
    <>
      <h1>Hello, React!</h1>
      <p>Lets Learn React Now</p>
      <Welcome />
      <UseStateExample/>
      <br></br>
      <UseStateToggleButton/>
      <br /><br /><br />
      <NameForm/>
      <br /><br />
      <UserInfo/>
      <br /><br />
      <TodoList/>
      <br /><br />
      <UseEffect1_Timer/>
      <br /><br />
    </>
  )
}
export default App
