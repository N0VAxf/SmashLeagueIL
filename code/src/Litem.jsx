import React from 'react';

export default function Litem(props) {
  return <div>
      <li>
		<mark>{props.PlayerName}</mark>
		<small>{props.points}</small>
	</li>
  </div>;
}
