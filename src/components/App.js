import React from 'react';
import { useReducer } from 'react';
import { addOne, applyNumber, changeOperation } from '../actions';
import './App.css';
import { initialState } from '../reducers';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer from '../reducers';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange = (evt) => {
    // console.log(evt.target.value)
    dispatch(applyNumber(evt.target.value))
  }

  const changeOp = (evt) => {
    dispatch(changeOperation(evt.target.value))
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
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={onChange} value={1}/>
              <CalcButton onClick={onChange} value={2}/>
              <CalcButton onClick={onChange} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={onChange} value={4}/>
              <CalcButton onClick={onChange} value={5}/>
              <CalcButton onClick={onChange} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={onChange} value={7}/>
              <CalcButton onClick={onChange} value={8}/>
              <CalcButton onClick={onChange} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={changeOp} value={"+"}/>
              <CalcButton onClick={changeOp} value={"*"}/>
              <CalcButton onClick={changeOp} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
