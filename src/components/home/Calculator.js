import React, { Component } from 'react'
import Display from './Display'

export default class Calculator extends Component {

    
    constructor() {
        super();

        this.handleDisplayChange = this.handleDisplayChange.bind(this)
        this.handleOperationButtonClick = this.handleOperationButtonClick.bind(this)
        this.addOperation = this.addOperation.bind(this)
        this.clearHistory = this.clearHistory.bind(this)

        this.state = {
            display: '',
            resetDisplay: false,
            history:false,
            operations:[]
        }
    }
    handleDisplayChange(e) {
        if (e.target.value !== 'clear') {
            if (this.state.resetDisplay !== true) {
                let updatedDisplay = this.state.display + e.target.value
                this.setState({ display: updatedDisplay })
            } else {
                this.setState({ display: e.target.value, resetDisplay: false })
            }
        } else {
            this.setState({ display: '' })
        }
    }

    handleOperationButtonClick(e) {
        switch (e.target.value) {
            case 'delete':
                let updatedDisplay = this.state.display.slice(0, -1)
                this.setState({ display: updatedDisplay })
                break
            case '+':
                let newDisplay = this.state.display + '+'
                this.setState({
                    display: newDisplay,
                    resetDisplay: false
                })
                break
            case '-':
                let newDisplay2 = this.state.display + '-'
                this.setState({
                    display: newDisplay2,
                    resetDisplay: false
                })
                break
            case '=':
                try {
                    let result = eval(this.state.display)
                    this.addOperation()
                    this.setState({ display: `${result}`, resetDisplay: true })
                } catch (e) {
                    console.log(e)
                    this.setState({ display: `` })
                }
                break
            case '-5':
                try {
                    if(this.state.display===''){
                        this.setState({display:'-5',resetDisplay:true})
                        this.addOperation('-5')
                        break
                    }
                    let result = eval(this.state.display) - 5
                    this.addOperation(`${eval(this.state.display)} - 5`)
                    this.setState({ display: `${result}` })
                } catch (e) {
                    this.setState({ display: `` })
                    this.addOperation()
                }
                break
            case '+5':
                try {
                    if(this.state.display===''){
                        this.setState({display:'5',resetDisplay:true})
                        this.addOperation('5')
                        break
                    }
                    let result = eval(this.state.display) + 5
                    this.addOperation(`${eval(this.state.display)} + 5`)
                    this.setState({ display: `${result}` })
                } catch (e) {
                    this.setState({ display: `` })
                    this.addOperation()
                }
                break
        }
    }

    addOperation(op=null){ 
        if(op===null){
            let newOperationList = this.state.operations
            newOperationList.push(this.state.display)
    
            this.setState({operations:newOperationList})

            console.log(this.state.operations)
            console.log(this.state.display)
        }else{
            let newOperationList = this.state.operations
            newOperationList.push(op)
    
            this.setState({operations:newOperationList})

            console.log(this.state.operations)
            console.log(this.state.display)
        }
    }

    clearHistory(e){
        e.preventDefault()
        this.setState({operations:[]})
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="container-sm mt-2 shadow rounded" style={{ maxWidth: '500px', backgroundColor: 'white' }}>
                    <Display
                        displayValue={this.state.display === '' ? 0 : this.state.display}
                        resultValue={this.state.result}>
                    </Display>

                    <div className="row">
                        <div className="col-9">
                            <div className="row">
                                {keyboardNumbersList.map(item => {
                                    return (
                                        <div className="col-4 p-1">
                                            <button type="button"
                                                value={item.value}
                                                onClick={this.handleDisplayChange}
                                                className="btn btn-outline-primary btn-block m-0">{item.text}
                                            </button>
                                        </div>
                                    )
                                }
                                )}
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                {operationButtonsList.map(item => {
                                    return (
                                        <div className="col-12 p-1">
                                            <button type="button"
                                                value={item.value}
                                                onClick={this.handleOperationButtonClick}
                                                className={`btn btn-block m-0 ${item.color}`}>
                                                {item.text}
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 p-1">
                            <button value='-5'
                                onClick={this.handleOperationButtonClick}
                                type="button"
                                className="btn btn-outline-primary btn-block m-0">
                                Substract 5
                            </button>
                        </div>
                        <div className="col-6 p-1">
                            <button value='+5'
                                onClick={this.handleOperationButtonClick}
                                type="button"
                                className="btn btn-outline-primary btn-block m-0">
                                Add 5
                            </button>
                        </div>
                    </div>
                </div>
             
            <br/>

            <div className="container-sm mt-2 shadow rounded" style={{ maxWidth: '500px', backgroundColor: 'white' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <p>History</p>
                        </div>
                        <div className="col-6 text-right">
                            <a onClick={this.clearHistory} className="button" style={{cursor:'pointer'}}>Clear</a>
                        </div>
                    </div>
                </div>
                <ul class="list-group">
                    {this.state.operations.reverse().map(item=>{
                        return(
                        <li class="list-group-item" style={{cursor:'pointer'}}>{item} = {eval(item)}</li>
                        )
                    })}
                </ul>
            </div>

            </div>
        )
    }
}

const keyboardNumbersList = [
    {
        color: 'btn-primary',
        text: 7,
        value: 7
    },
    {
        color: 'btn-primary',
        text: 8,
        value: 8
    },
    {
        color: 'btn-primary',
        text: 9,
        value: 9
    },
    {
        color: 'btn-primary',
        text: 4,
        value: 4
    },
    {
        color: 'btn-primary',
        text: 5,
        value: 5
    },
    {
        color: 'btn-primary',
        text: 6,
        value: 6
    },
    {
        color: 'btn-primary',
        text: 1,
        value: 1
    },
    {
        color: 'btn-primary',
        text: 2,
        value: 2
    },
    {
        color: 'btn-primary',
        text: 3,
        value: 3
    },
    {
        color: 'btn-primary',
        text: 0,
        value: 0
    },
    {
        color: 'btn-primary',
        text: '.',
        value: '.'
    },
    {
        color: 'btn-primary',
        text: 'C',
        value: 'clear'
    }
]
const operationButtonsList = [
    {
        text: '<-',
        color: 'btn-outline-warning',
        value: 'delete'
    },
    {
        text: '+',
        color: 'btn-outline-success',
        value: '+'
    },
    {
        text: '-',
        color: 'btn-outline-success',
        value: '-'
    },
    {
        text: '=',
        color: 'btn-outline-success',
        value: '='
    }
]