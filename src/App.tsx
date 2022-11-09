import TimerList from "./Components/Timer/timerList";
import "./assets/css/styles.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <section className='background'>
        <Navbar />
        <div className='timers d-flex'>
          <TimerList />
        </div>
      </section>
    </>
  );
}

export default App;
