import React from 'react';
import { useReducer } from 'react';
import { addOne, applyNumber, changeOperation, clearDisplay, m1, mR, mC } from '../actions';
import './App.css';
import { initialState } from '../reducers';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer from '../reducers';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange = (num) => {
    // console.log(evt.target.value)
    dispatch(applyNumber(num))
  }

  const changeOp = (evt) => {
    dispatch(changeOperation(evt.target.value))
  }

  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  }

  const clearM = () => {
    dispatch(m1());
  }

  const clearMR = () => {
    dispatch(mR());
  }

    const clearMC = () => {
    dispatch(mC());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={clearM} value={"M+"}/>
              <CalcButton onClick={clearMR} value={"MR"}/>
              <CalcButton onClick={clearMC} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => onChange(1)} value={1}/>
              <CalcButton onClick={() => onChange(2)} value={2}/>
              <CalcButton onClick={() => onChange(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => onChange(4)} value={4}/>
              <CalcButton onClick={() => onChange(5)} value={5}/>
              <CalcButton onClick={() => onChange(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => onChange(7)} value={7}/>
              <CalcButton onClick={() => onChange(8)} value={8}/>
              <CalcButton onClick={() => onChange(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={changeOp} value={"+"}/>
              <CalcButton onClick={changeOp} value={"*"}/>
              <CalcButton onClick={changeOp} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClearDisplay} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
