import NotiifcationButton from "./components/NotiifcationButton";
import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <>
      <Header/>
      <NotiifcationButton/>
      <section id="sales">
        <div className="dsmeta-container">
          <SalesCard/>
        </div>
      </section>
    </>
  )
}

export default App
