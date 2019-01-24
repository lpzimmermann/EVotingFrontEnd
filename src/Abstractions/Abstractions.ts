export interface PollType {
    id: string,
    title: string,
    description: string,
    date: Date
}

export interface CreatePollType {
    title: string,
    description: string,
    due: Date
}

export interface Vote {
    pollId: string,
    userId: string,
    answer: AnswerType
}

export interface User {
    passnummer: string,
    name: string,
    firstName: string,
    birthday: Date
}

export interface UserRequest {
    id: string,
    birthday: Date
}

export enum AnswerType {
    Yes, No
}