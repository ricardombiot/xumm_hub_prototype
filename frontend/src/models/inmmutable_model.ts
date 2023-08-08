export class InmmutableModel<T> {
    constructor(public data : T){
    }

    protected clone_data() : T {
      return JSON.parse(JSON.stringify(this.data));
    }

    raw() : T {
      return this.data;
    }
}