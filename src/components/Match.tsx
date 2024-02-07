import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MatchType } from '../types'


interface Props {
  id: string;
  autoSelect: boolean;
  setSelectedMatch: (selectedMatch: MatchType) => void;
}

const getDateTime = (time: number) => {
    return `${new Date(time * 1000).toDateString()}`
}

const Match: React.FC<Props> = React.memo(({ setSelectedMatch, id, autoSelect }) => {
    const [match, setMatch] = useState<MatchType | null>(null);

    useEffect(() => {
        axios({
            "method": 'get',
            "baseURL": 'http://localhost:4000/api/v1',
            "url": `/riot/lol/get_match/${id}`,
        })
        .then(response => {
            if (autoSelect == true) { setSelectedMatch(response.data)}
            setMatch(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    if (match == null) return (
        <div className="flex border-b border-gray-200 flex-col justify-start items-start py-4 cursor-pointer">
            <div className="text-sm"> Loading... </div>
            <div className="text-xs text-blue-400"> </div>
        </div>
    )

    return (
        <div onClick={() => setSelectedMatch(match)} className="flex border-b border-gray-200 flex-col justify-start items-start py-4 cursor-pointer">
            <div className="text-sm"> {match.info.gameMode} - {match.info.gameType} </div>
            <div className="text-xs text-blue-400"> { getDateTime(match.info.gameStartTimestamp) }</div>
        </div>
    );
});

export default Match;
