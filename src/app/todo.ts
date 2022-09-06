export class Todo {

    constructor(private _name: string, private _postponed: boolean, private _completed: boolean){}

    public get name(): string {
        return this._name;
    }

    public set name(value: string){
        this._name = value;
    }

    public get postponed(): boolean{
        return this._postponed;
    }

    public set postponed(value : boolean){
        this._postponed = value;
    }

    public get completed(): boolean {
        return this._completed;
    }

    public set completed(value: boolean){
        this._completed = value;
    }
}
