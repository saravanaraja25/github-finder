import {useState,useEffect} from 'react'
import axios from 'axios'
import UserList from './UserList';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  const [search,setSearch]=useState('');
  const [users,setUsers]=useState([]);
  
  useEffect(() => {
    const fetchUsers=async()=>{
      let cancelToken
      if(search!== ""){
        cancelToken=axios.CancelToken.source()
        const res=await axios.get(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`,{cancelToken:cancelToken.token})
        setUsers(res.data.items)
        // console.log(users)
      }
      
    }
    fetchUsers();
  }, [search])
  function handleSearch(e){
    if(e.key==='Enter')
      setSearch(e.target.value)
  }
  return (
    <Router>
      <div className="App">
          <nav className="navbar mb-5 navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="p-4 navbar-brand" href="#">
                Github Users Finder
              </a>
            </div>
          </nav>
          <div className="home container">
            <div className="search-box mb-5">
              <input className="p-3" onKeyDown={handleSearch} name={search} placeholder="Enter Username and Press Enter Button to Search Users" type="text"/>
            </div>
            <Switch>
              <Route path="/" component={()=><UserList users={users} />} exact />
            </Switch>
            
          </div>
      </div>
    </Router>
  );
}

export default App;
