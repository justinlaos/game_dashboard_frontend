import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Match from './Match';
import { MatchesType, MatchType } from '../types'

interface Props {
  puuid: string;
  setSelectedMatch: (selectedMatch: MatchType) => void;
  setMatchCount: (matchCount: number) => void;
}

export const MatchList: React.FC<Props> = React.memo(({ setSelectedMatch, setMatchCount, puuid }) => {
    const [matches, setMatches] = useState<MatchesType | null>(null);

    useEffect(() => {
        if (!matches) {
            axios({
                "method": 'get',
                "baseURL": 'http://localhost:4000/api/v1',
                "url": `/riot/lol/get_summoner_matches/${puuid}`,
            })
            .then(response => {
                setMatches(response.data);
                setMatchCount(response.data.length)
            })
            .catch(error => {
                console.error(error);
            });
        }
    }, []);

    if (matches == null) return (
       <></>
    )

    return (
        <>
            {matches.map((item) => (
                <div key={item}>
                    <Match id={item} autoSelect={matches.indexOf(item) == 0 ? true : false} setSelectedMatch={setSelectedMatch} />
                </div>
            ))}
        </>
    );
});

export default MatchList;
