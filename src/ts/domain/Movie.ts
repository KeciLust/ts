import Buyable from "./Buyable";

export default class Movie implements Buyable {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly time: number,
        readonly price: number,
        readonly year: number,
        readonly country: string,
        readonly genre: string,
        readonly tagline: string
    ) {}
}
