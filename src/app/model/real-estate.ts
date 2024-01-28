export class RealEstate {
  constructor(
    public id: number | null,
    public title: string,
    public description: string,
    public price: number,
    public imagePath: string
  ) {}
}
