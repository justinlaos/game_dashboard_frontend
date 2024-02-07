import { useState } from 'react';
import MatchList from './MatchList';
import { SelectedMatch } from './SelectedMatch';
import { SummonerTotals } from './SummonerTotals';
import { SummonerType, MatchType } from '../types';

interface SummonerProps {
  summoner: SummonerType;
  onSelect: MatchType;
}

export const SummonerProfile: React.FC<SummonerProps> = ({ summoner }) => {
    const [selectedMatch, setSelectedMatch] = useState<MatchType | null>(null);
    const [matchCount, setMatchCount] = useState<number>(0);

    return (
        <div className="flex flex-col justify-between flex-wrap mt-8">
            <div className="flex items-center justify-start overflow-scroll flex-wrap mb-4 rounded bg-zinc-100 p-4">
                <div className="sm:w-1/4 flex items-center">
                    <img className="w-20 h-20 rounded-full" src={`https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${summoner.profileIconId}.png`} alt="Player Icon" />
                    <div className="flex flex-col items-start ml-4">
                        <div className="text-blue-800 text-2xl font-bold">{summoner.name}</div>
                        <div>Rank: {summoner.summonerLevel}</div>
                    </div>
                </div>
                <div className="sm:w-3/4">
                    <SummonerTotals puuid={summoner.puuid}/>
                </div>
            </div>

            <div className="mt-8 sm:mt-0 flex flex-wrap">
                <div className="w-full sm:w-1/4">
                    Matches: {matchCount}
                    <div className='flex flex-col h-96 overflow-scroll'>
                        <MatchList puuid={summoner.puuid} setMatchCount={setMatchCount} setSelectedMatch={setSelectedMatch}/>
                    </div>
                </div>
                <div className="w-full sm:w-3/4">
                    {selectedMatch && <SelectedMatch match={selectedMatch} puuid={summoner.puuid}/>}
                </div>
            </div>
        </div>
    );
};


