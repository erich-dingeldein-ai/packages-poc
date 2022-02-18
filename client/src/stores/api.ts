import { writable } from 'svelte/store';
import * as dogApi from '@erich-dingeldein-ai/dog-api';

export const breedList = writable<string[]>();
export const imageSrc = writable<string>();

interface Data {
    message: string,
    status: string
}

export const getAllBreeds = (): void => {
    dogApi.list.all()
        .then((data: Data)=> {
            console.log(data);
            breedList.set(Object.keys(data.message))
        })
}

export const getRandomImageFromBreed = (breed): void => {
    dogApi.images.randomFromBreed(breed)
        .then((data: Data) => {
            imageSrc.set(data.message);
        })
}