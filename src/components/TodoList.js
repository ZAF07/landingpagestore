import React from 'react'

function TodoList(props) {
    const {task} = props;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                
                    <ul className="p-0">
                        <li className="card p-3 mb-2 shadow">{task} <span><button className="btn btn-sm btn-primary shadow-lg">Done</button></span></li>
                    </ul>
                </div>

            </div>
            
        </div>
    )
}

export default TodoList
