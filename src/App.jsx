import './App.css'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { Table } from './components/Table'

function App() {

  return (
    <>
      <Header />
      <div className="body-page">
        <div className="table-section">
          <main className="main">
            <h2>Product List</h2>
          </main>
          <Table />
        </div>

        <div className="form-section">
          <h2>Add product</h2>
          <Form />
        </div>
      </div>
    </>
  )
}

export default App
