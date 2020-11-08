import './App.css';
import { BrowserRouter , Route ,Switch } from 'react-router-dom'
import Ques from './components/AddQue/ques';
import DisplayQues from './components/displayQues/displayQues';
import Navbar from "./components/navigation/navbar.js"

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact><Ques /></Route>
      <Route path="/displayQues"><DisplayQues /></Route>
      <Route path="/navbar"><Navbar /></Route>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
