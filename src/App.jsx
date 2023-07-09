import { useState, useEffect } from 'react'
import './App.css'
import { Authors } from './components/Authors'
import { Button } from './components/Button'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { Table } from './components/Table'

function App() {
  const [ dataAPI, setDataAPI ] = useState([])
  const [ showForm, setShowForm ] = useState(false)
  const [ showEditButtons, setShowEditButtons ] = useState(false)
  const [ selected, setSelected ] = useState(null);
  const [ loading, setLoading ] = useState(true)
  const [ selectedHome, setSelectHome ] = useState(true)
  const [ selectedAuthors, setSelectAuthors ] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState(null)
  const [ singleRow, setSingleRow ] = useState({
    name: '',
    color: '',
    category: '',
    price: '',
  })

  
  useEffect(() => {
    (async function getData() {
      try {
        const res = await fetch('http://localhost:3000/data')
        const users = await res.json()
        setDataAPI(users.data);
        console.log(users.data);
        setLoading(false)
      } catch(error){
        setErrorMessage(`Ups, and error happend ${error.message}`)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const handleAddRow = (newRow) => {
    const rowIndex = dataAPI.findIndex(item => item.id === newRow.id)

    if (rowIndex !== -1) {
      const updateRow = [...dataAPI]
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
    setSingleRow({
      name: '',
      color: '',
      category: '',
      price: '',
    })
  }

  const selectedAuthorsButton = () => {
    setSelectHome(!selectedHome)
    setSelectAuthors(!selectedAuthors)
  }

  return (
    <>
      <Header
        onClick={selectedAuthorsButton}
      />
      {
        !selectedAuthors ?
        <div className="body-page">
          <div className="table-section">
            <main className="main">
              <h2>Product List</h2>
              <Button color={'blue-color'} value={'Add'} onClick={handleShowForm} />
            </main>
            <Table
              dataAPI={dataAPI}
              setDataAPI={setDataAPI}
              loading={loading}
              errorMessage={errorMessage}
              setShowEditButtons={setShowEditButtons}
              setShowForm={setShowForm}
              setSingleRow={setSingleRow}
              setErrorMessage={setErrorMessage}
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
        </div> :
        <Authors />
      }
    </>
  )
}

export default App
