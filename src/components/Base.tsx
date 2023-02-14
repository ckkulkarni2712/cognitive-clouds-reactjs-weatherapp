import { ChangeEvent, useState } from 'react'
import './Base.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
const Base = ():JSX.Element => {
    const [name, setName] = useState<String>("");
    const searchData = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setName(e.target.value);
    }
  return (
      <div className='display'>
                <input type="text" onChange={searchData}
                      className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <button disabled={name.length < 1} className='btn btn-primary'><Link to="/City" state={{ name: name }}  style={{ textDecoration: 'none',color: 'white' }}>Submit</Link></button>
      </div>
  )
}

export default Base
