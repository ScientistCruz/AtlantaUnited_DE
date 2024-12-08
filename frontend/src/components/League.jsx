
import NewsTicker from './NewsTicker';
import React, { useEffect, useState } from "react";
import axios from 'axios'

const League = () => {

  
  const [team, setTeam] = useState('Atlanta United FC');
  const [selectedGame, setSelectedGame] = useState(null);

  const handleTeamChange = (e) => setTeam(e.target.value);
  const [message, setMessage] = useState("");
  const [total_pages, setTotal_pages] = useState([1])
  const [count, setCount] = useState(0)
  const [data, setData] = useState({})
  const [data_prep, setData_prep] = useState({})
  const [num_total_pages, setNum_total_pages] = useState(1)


  const [page, setPage] = useState(1)
  const [currentPage, setcurrentPage] = useState(1)
  const database = 'atl_united_db'
  const table = 'player_stats'
  const limit = 20
  const columns = ['*']

  const [tb_columns, setColumns] = useState([]);

  const gen_data = (page) => {
    axios.get("http://localhost:8000/query/", {
      headers: {
        'database': database,
        'table': table,
        'limit' : limit,
        'columns' : columns,
        'page' : page
      } 
    }).then(response => {
      setData(response.data['data']);
      setColumns(response.data['data'][0]);
      console.log(response)
      setData_prep(response.data['data'][0]);
      setPage(page);
      setcurrentPage(page);
    }
    
    ) ;

  }
  useEffect(() => {
    gen_data(page);
    setNum_total_pages(Math.ceil(count/limit));
   
  }, [page]);
  

  const rows = Object.values(data).map(item => Object.values(item));

  const footer_logic = total_pages.map(page => ( page != currentPage ?
    <button onClick={() => gen_data(page)} className='pagination_button'> {page} </button>
    :
    <button onClick={() => gen_data(page)} className='current_pagination_button'> {page} </button>
    ))

  return (
    <div className="bg-atlantaGold text-atlantaBlack min-h-screen p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">MLS League Games</h1>
        <select onChange={handleTeamChange} className="p-2 border rounded">
          {/* Add all 30 teams */}
          <option value="Atlanta United FC">Atlanta United FC</option>
          <option value="LAFC">LAFC</option>
        </select>
      </div>

      
      <div className = 'table_container'>
      <h1 className='table_name'>
        {table}
      </h1>
      <table>
        <thead>
          <tr>
            {Object.keys(data).map(header => <th key={header}>{header}</th>)}

          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => <td key={index}>{cell}</td>)}
            </tr>
          ))}
        </tbody>      
        </table>  

        <div className='footer'>
        {footer_logic}
        </div>
      </div>      

    </div>

  );
};

export default League;
