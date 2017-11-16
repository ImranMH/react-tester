
import React from 'react'
import { Link } from 'react-router-dom';
import PlayerAPI from '../api';
const FullRoster = () => (
  <div>
    <h2> full roster</h2>
    <ul> 
			  {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)
export default FullRoster