import React, { FC, useState } from 'react';

export enum HairColor {
    Blonde = 'you hair is blonde, good for you',
    Brown = 'Cool hair color',
    Pink = 'Wow that is so cool'
}

interface Objects {
    name: string;
    age: number;
    email: string;
    hairColor: HairColor
} 

export const Person: FC<Objects> = ({ name, age, email, hairColor }) => {

    const [country, setCountry] = useState<string | null>('')

    return (
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{email}</h1>
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCountry(event.target.value)} type="text" placeholder='write down your country' /> <br />
            <h2>{country}</h2>
            <h1>{hairColor}</h1>
        </>
    );
}
