import { useState, useEffect } from 'react';
import { SearchHeader } from './components/SearchHeader';
import { SummonerProfile } from './components/SummonerProfile';
import { SummonerType } from './types'
import './App.css';
import axios from 'axios';

function App() {
   const [searchQuery, setSearchQuery] = useState<string>('');
   const [summoner, setSummoner] = useState<SummonerType | null>(null);

   const handleSearch = (query: string) => { 
      setSearchQuery(query) 
   };

   useEffect(() => {
      if (searchQuery != '') {
         axios({
            "method": 'get',
            "baseURL": 'http://localhost:4000/api/v1',
            "url": `/riot/lol/get_summoner/${searchQuery}`,
         })
         .then(response => {
            setSummoner(response.data);
         })
         .catch(error => {
            console.error(error);
         });
      }
    }, [searchQuery]);

   return (
      <>
         <SearchHeader onSearch={handleSearch} />
         {!summoner && <div className="border border-gray-300 p-4 mt-8 text-center"> No selected summoners. Search for one above </div>}
         {summoner && <SummonerProfile summoner={summoner}/>}
      </>
   );
}

export default App;
