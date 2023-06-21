import * as React from "react"
import { useState, useEffect } from "react"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import TransactionDetail from "../TransactionDetail/TransactionDetail"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

export default function App() {

  const [isLoading, setIsLoading] = useState(false); 
  const [transactions, setTransactions] = useState([]); 
  const [transfers, setTransfers] = useState([]); 
  const [error, setError] = useState(""); 
  const [filterInputValue, setFilterInputValue] = useState(""); 

  return (
    <div className="App">
      {/* <Navbar /> */}
      <BrowserRouter>
        <Navbar 
        filterInputValue={filterInputValue}
        setFilterInputValue={setFilterInputValue} 
        />
        <main>
          <Routes>
            <Route 
              path="/"  
              element={<Home />} />
            <Route 
              path="/transactions/:transactionId"
              element={<TransactionDetail />}
              />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
