import React from 'react';

export default function arrowRenderer({ onMouseDown }) {
	return React.createElement("span", {
		className: "Select-arrow",
		onMouseDown: onMouseDown
	});
};