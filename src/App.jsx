import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
//import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm.jsx/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {
  // const handleSingUpSubmite = data => {
  // //   e.preventDefault();
  // console.log('sing up data', data)
  // }
  // const handleUpdataProfile = data =>{
  //  console.log('update profile', data)
  // }

  return (
    <>
     
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
      formTitle={'Sign up'} 
      handleSubmite={handleSingUpSubmite}>
        <div>
        <h2>sing up</h2>
        <p>please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm 
      formTitle={'Profile Update'}
      handleSubmite={handleUpdataProfile}
      submitBtnText={'Update'}>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
