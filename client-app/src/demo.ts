export interface Duck{
    id:number;
    name:string;
    numlegs:number;
    makeSound:(sound: string)=>void;
}
const duck1:Duck={
    id:1,
    name:'huey',
    numlegs:66,
    makeSound:(sound: string) => console.log(sound)
}
const duck2:Duck={
    id:2,
    name:'dewey',
    numlegs:12,
    makeSound:(sound: string) => console.log(sound)
}
duck1.makeSound("78");
export const Ducks=[duck1,duck2];
