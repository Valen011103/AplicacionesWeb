import { FC, ReactNode } from 'react';
import './stylesOptions.css'; 

export const Options = () => {
  return (
	<div className="container">
	  <div className="tabs">
		<input type="radio" id="radio-1" name="tabs" checked={true} />
		<label className="tab" htmlFor="radio-1">
		  Hello<span className="notification">2</span>
		</label>
		<input type="radio" id="radio-2" name="tabs" />
		<label className="tab" htmlFor="radio-2">UI</label>
		<input type="radio" id="radio-3" name="tabs" />
		<label className="tab" htmlFor="radio-3">World</label>
		<span className="glider"></span>
	  </div>
	</div>
  );
}