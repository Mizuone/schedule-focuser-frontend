export interface Pursuit {
    name: string;
    currentAmount: number;
    goalAmount: number;
    attributingMastery: string;
}

export const pursuits: Pursuit[] = [
    {
        name: 'Dev Time',
        currentAmount: 44,
        goalAmount: 60,
        attributingMastery: 'Software Developer'
    },
    {
        name: 'Godot 4: Character Port',
        currentAmount: 63,
        goalAmount: 85,
        attributingMastery: 'Game Developer'
    },
    {
        name: 'Blender: New Enemy',
        currentAmount: 40,
        goalAmount: 60,
        attributingMastery: 'Game Developer'
    },
];
export const emptyPursuits: Pursuit[] = [];


export interface Mastery {
    title: string;
    currentAmount: number;
    masteryLevel: number;
    requiredAmount: number;
}

export const masteries: Mastery[] = [
    {
        title: 'Software Developer',
        currentAmount: 8920,
        masteryLevel: 20,
        requiredAmount: 10000
    },
    {
        title: 'Game Developer',
        currentAmount: 1600,
        masteryLevel: 12,
        requiredAmount: 2400
    },
];
export const emptyMasteries: Mastery[] = [];