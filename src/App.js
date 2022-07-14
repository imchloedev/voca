import Day from "./components/Day";
import DayList from "./components/DayList";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Empty from "./components/Empty";
import CreateWord from './components/CreateWord'
import CreateDay from "./components/CreateDay";

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<DayList />} />
        <Route path="/day/:day" element={<Day />} />
        <Route path="/create_word" element={<CreateWord/>} />
        <Route path="/create_day" element={<CreateDay/>} />
      </Route>
      {/* <Route path="*" element={<Empty/>}/> */}
    </Routes>
  );
}

export default App;
