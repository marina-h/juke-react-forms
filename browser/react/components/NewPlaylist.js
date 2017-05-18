import React from 'react';

const NewPlaylist = (props) => {
  const warning = <div className="alert alert-warning">Please enter a valid name</div>

  return (
    <div className="well">
      <form className="form-horizontal" onSubmit={props.handleSubmit}>
        <fieldset>
          { props.showWarning ? warning : <div></div> }
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" value={props.inputValue} onChange={props.handleChange} type="text" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button disabled={props.disabled} type="submit" className="btn btn-success">Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
};

export default NewPlaylist;
