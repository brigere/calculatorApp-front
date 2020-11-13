import React, { Component } from 'react'

export default class Display extends Component {
    render() {
        return (
            <div className="row">
                <div id="panel" className="col m-1 mt-2 p-1 border border-primary rounded">                  
                    {
                        this.props.resultValue==null?
                            <p className="text-right p-1">
                                {this.props.displayValue}
                            </p>
                            :
                            <p className="text-right p-1">
                                {this.props.resultValue}
                            </p>
                    }
                </div>
            </div>
        )
    }
}
