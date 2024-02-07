import React, { useState, useEffect } from 'react';
import { MatchType } from '../types'

interface Props {
  match: MatchType;
  puuid: string;
}

const getDateTime = (time: number) => {
    return `${new Date(time * 1000).toDateString()}`
}

export const SelectedMatch: React.FC<Props> = ({ match, puuid }) => {
    const [summonerMatchData, setsummonerMatchData] = useState<object | null>(null);

    useEffect(() => {
        setsummonerMatchData(match.info.participants.filter(obj => obj.puuid == puuid)[0])
    }, [match]);

    const matchResult = summonerMatchData && summonerMatchData.win ? <div className="text-yellow-600 font-extrabold">WON</div> : <div className="text-red-700 font-extrabold">Lost</div>
    
    if (summonerMatchData == null) return <div>Data Wrong</div>

    return (
        <div className="flex flex-col justify-start items-start rounded bg-zinc-100 p-4 sm:ml-6">
            <div className="flex justify-start items-center">
                {matchResult}
                <div className="text-sm ml-4"> {match.info.gameMode} - {match.info.gameType} </div>
            </div>

            <div className="flex justify-start items-center text-xs mt-1 text-gray-400">
                <div className=" text-blue-400"> { getDateTime(match.info.gameStartTimestamp) }</div>
                <div className="ml-4"> { match.metadata.participants.length } players </div>
                <div className="ml-4"> map id: { match.info.mapId } </div>
            </div>
            <div className="text-xs text-gray-400 mt-1">
                Played as {summonerMatchData.championName}
            </div>

            <div className="flex justify-around w-full items-center flex-wrap">
                <div>
                    <div className="min-w-24 min-h-24 rounded-full bg-gray-300 text-gray-800 font-bold text-xl flex items-center justify-center mb-2 mt-8">
                        {summonerMatchData.kills}
                    </div>
                    <div>Kills</div>
                </div>
                
                <div>
                    <div className="min-w-24 min-h-24 rounded-full bg-gray-300 text-gray-800 font-bold text-sm flex items-center justify-center mb-2 mt-8">
                        {summonerMatchData.totalDamageDealt}
                    </div>
                    <div>Total Damage Delt</div>
                </div>

                <div>
                    <div className="min-w-24 min-h-24 rounded-full bg-gray-300 text-gray-800 font-bold text-xl flex items-center justify-center mb-2 mt-8">
                        {summonerMatchData.assists}
                    </div>
                    <div>Assists</div>
                </div>

                <div>
                    <div className="min-w-24 min-h-24 rounded-full bg-gray-300 text-gray-800 font-bold text-xl flex items-center justify-center mb-2 mt-8">
                        {summonerMatchData.goldEarned}
                    </div>
                    <div>Gold Earned</div>
                </div>

                <div>
                    <div className="min-w-24 min-h-24 rounded-full bg-gray-300 text-gray-800 font-bold text-xl flex items-center justify-center mb-2 mt-8">
                        {summonerMatchData.visionScore}
                    </div>
                    <div>Vision Score</div>
                </div>
            </div>
        </div>
    );
};
