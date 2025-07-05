import Welcome from './components/Welcome.tsx'
import UseStateExample from './components/UseState1_Count.tsx'
import UseStateToggleButton from './components/UseState2_ToggleButton.tsx'
import NameForm from './components/UseState3_InputField.tsx'
import UserInfo from './components/UseState4_MultipleStates.tsx'
import TodoList from './components/UseState5_ArrayState_AddToList.tsx'
import UseState6_ShowHidePasswordToggle from './components/UseState6_ShowHidePasswordToggle.tsx'
import UseState7_DynamicBackgroundColorPicker from './components/UseState7_DynamicBackgroundColorPicker.tsx'
import UseEffect1_Timer from './components/UseEffect1_Timer.tsx'
import UseEffect2_FetchDataFromApi from './components/UseEffect2_FetchDataFromApi.tsx'

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
      <UseState6_ShowHidePasswordToggle/>
      <br /><br />
      <UseState7_DynamicBackgroundColorPicker/>
      <br /><br />
      <UseEffect1_Timer/>
      <br /><br />
      <UseEffect2_FetchDataFromApi/>
      <br /><br />
    </>
  )
}
export default App
