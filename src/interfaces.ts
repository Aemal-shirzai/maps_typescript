export interface Mappable {
    name: string,
    icon: string,
    location: {
        lat: number,
        lng: number
    }
    contentInfo(): string
}