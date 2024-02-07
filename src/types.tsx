export type SummonerType = {
    accountId: string;
    id: string;
    name: string;
    profileIconId: number;
    puuid: string;
    revisionDate: number;
    summonerLevel: number;
};

export type MatchType = {
    info: InfoMatchType;
    metadata: object;
};

export type MatchesType = string[];

export type TeamType = {
    bans: object;
    objectives: object;
    teamId: number;
    win: boolean;
}

export type InfoMatchType = {
    gameCreation: number;
    gameDuration: number;
    gameEndTimestamp: number;
    gameId: number;
    gameMode: string;
    gameName: string;
    gameStartTimestamp: number;
    gameType: string;
    gameVersion: string;
    mapId: number;
    participants: object[];
    platformId: string;
    queueId: number;
    teams: object[];
    tournamentCode: string;
}

export type SummonerTotalsType = {
    kills: number;
    totalDamageDealt: number;
    assists: number;
    goldEarned: number;
    visionScore: number;
}