import { useState, useEffect } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { Table } from './components/Table'
import { data as testInfo } from './assets/data'

// const getData = async () => {
//   // const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   // const data = await res.json()

//   setDataAPI(testInfo)
// }

// useEffect(() => {
//   getData()
// }, [])

function App() {
  const [ dataAPI, setDataAPI ] = useState(testInfo)
  const [ showForm, setShowForm ] = useState(false)
  const [ showEditButtons, setShowEditButtons ] = useState(false)
  const [ selected, setSelected ] = useState(null);
  const [ singleRow, setSingleRow ] = useState({
    name: '',
    color: '',
    category: '',
    price: '',
  })

  const handleAddRow = (newRow) => {
    const rowIndex = dataAPI.findIndex(item => item.id === newRow.id)

    if (rowIndex !== -1) {
      const updateRow = [...rowIndex]
      updateRow[rowIndex] = newRow
      setDataAPI(updateRow)
      setSelected(null)
    } else {
      setDataAPI([...dataAPI, newRow]);
    }
  }

  const handleShowForm = () => {
    setShowForm(true)
    setShowEditButtons(false)
  }
  
  const handleShowEditButtons = (product) => {
    setShowEditButtons(true)
    setShowForm(true)
    setSingleRow(product)
  }

  return (
    <>
      <Header />
      <div className="body-page">
        <div className="table-section">
          <main className="main">
            <h2>Product List</h2>
            <Button color={'blue-color'} value={'Add'} onClick={handleShowForm} />
          </main>
          <Table
            onClick={handleShowEditButtons}
            dataAPI={dataAPI}
            setSelected={setSelected}
            selected={selected}
          />
        </div>

        {
          showForm &&
          <div className="form-section">
            {
              !showEditButtons ?
              <h2>Add product</h2> :
              <h2>Edit products</h2>
            }
            <Form
              showEditButtons={showEditButtons}
              singleRow={singleRow}
              setSingleRow={setSingleRow}
              onAddRow={handleAddRow}
            />
          </div>
        }
      </div>
    </>
  )
}

export default App
