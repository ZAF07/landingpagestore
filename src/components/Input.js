import React from 'react'

function Input(props) {
    const {submitTask, showError, fade} = props;

    const clsName = `alert alert-danger mt-2 no-empty ${fade}`;
    return (
        <div className="mt-4">
            <form onSubmit={submitTask}>
                <div className="input-group input-group-sm mb-3">
                    {/* <span className="input-group-text" id="inputGroup-sizing-sm">Small</span> */}
                    <input name="newTask" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                </div>
                <button className="btn btn-primary btn-sm mt-2" type='submit'>Add Task</button>
                <div className={clsName} id={showError} role="alert">
                    Do Something!
                </div>
            </form>
            
        </div>
    )
}

export default Input
