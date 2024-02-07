import { useState, useEffect } from 'react';
import { SummonerTotalsType } from '../types';
import axios from 'axios';

interface summonerTotalsProps {
    puuid: string;
}

export const SummonerTotals: React.FC<summonerTotalsProps> = ({puuid}) => {
    const [totals, setTotals] = useState<SummonerTotalsType>({"kills": 0, "totalDamageDealt": 0, "assists": 0, "goldEarned": 0, "visionScore": 0});

    useEffect(() => {
        axios({
            "method": 'get',
            "baseURL": 'http://localhost:4000/api/v1',
            "url": `/riot/lol/get_summoner_total_data/${puuid}`,
        })
        .then(response => {
            setTotals(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <div className="flex justify-between  h-20 items-center rounded p-4 sm:ml-6 text-sm">
            <div>
                <div className=" text-gray-800 font-bold text-xl flex items-center justify-center mb-1">
                    {totals.kills}
                </div>
                <div>Kills</div>
            </div>
            
            <div>
                <div className=" text-gray-800 font-bold text-xl flex items-center justify-center mb-1">
                    {totals.totalDamageDealt}
                </div>
                <div>Total Damage Delt</div>
            </div>

            <div>
                <div className=" text-gray-800 font-bold text-xl flex items-center justify-center mb-1">
                    {totals.assists}
                </div>
                <div>Assists</div>
            </div>

            <div>
                <div className=" text-gray-800 font-bold text-xl flex items-center justify-center mb-1">
                    {totals.goldEarned}
                </div>
                <div>Gold Earned</div>
            </div>

            <div>
                <div className=" text-gray-800 font-bold text-xl flex items-center justify-center mb-1">
                    {totals.visionScore}
                </div>
                <div>Vision Score</div>
            </div>
        </div>
    
    );
};


