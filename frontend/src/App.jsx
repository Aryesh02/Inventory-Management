import { Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard';
import Inventory from './Pages/Inventory';
import AddComponents from './Pages/AddComponents';
import IssueComponents from './Pages/IssueComponents';
import ReturnComponents from './Pages/ReturnComponents';
import NewComponent from './Pages/NewComponent';
import ComponentDetails from './Pages/ComponentDetails';

function App() {

  return (
    <>
      <Routes >
        <Route path='/' element= {<Login />} />
        <Route path='/dashboard' element = {<Dashboard />}/>
        <Route path='/inventory' element = {<Inventory />} />
        <Route path="/:id" element={<ComponentDetails />} />
        <Route path='/add-components' element = {<AddComponents />} />
        <Route path='/new-component' element = {<NewComponent />} />
        <Route path='/issue-components' element = {<IssueComponents />} />
        <Route path='/return-components' element = {<ReturnComponents />} />
      </Routes>
    </>
  )
}

export default App
