import React from "react";

export default function alert(props) {
  return (
    <div style={{height:'28px'}}>
     { props.alert &&
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show role="alert"`}
        >
          <strong className="text-capitalize">{props.alert.type}</strong>{" "}
          {props.alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>}
    </div>
  );
}
