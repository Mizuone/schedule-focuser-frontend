export interface Goal {
    name: string;
    currentAmount: number;
    goalAmount: number;
    attributingMastery: string;
}

export const goals: Goal[] = [
    {
        name: 'Dev Time',
        currentAmount: 20,
        goalAmount: 60,
        attributingMastery: 'Software Developer'
    },
    {
        name: 'Game Dev',
        currentAmount: 80,
        goalAmount: 100,
        attributingMastery: 'Game Developer'
    },
    {
        name: 'Game Dev',
        currentAmount: 40,
        goalAmount: 100,
        attributingMastery: 'Game Developer'
    },
];
export const emptyGoals: Goal[] = [];


export interface Mastery {
    title: string;
    currentAmount: number;
    masteryLevel: number;
    requiredAmount: number;
}

export const masteries: Mastery[] = [
    {
        title: 'Software Developer',
        currentAmount: 400,
        masteryLevel: 2,
        requiredAmount: 560
    },
    {
        title: 'Game Developer',
        currentAmount: 200,
        masteryLevel: 1,
        requiredAmount: 250
    },
];
export const emptyMasteries: Mastery[] = [];