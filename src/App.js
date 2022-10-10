import './App.css';
import Header from './Components/Header/Header';
import courseData from './fakeData/courseData';
import Shop from './Components/Shop/Shop';

function App() {
  // console.log(courseData);
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
