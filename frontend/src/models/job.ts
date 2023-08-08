
class InmmutableModel<T> {
    constructor(public data : T){
    }

    protected clone_data() : T {
      return JSON.parse(JSON.stringify(this.data));
    }

    raw() : T {
      return this.data;
    }
}

export interface IJob {
    title : string,
    budget_range : string,
    description : string
}

  
export class Job extends InmmutableModel<IJob> {
    
    constructor(job : IJob){
        super(job);
    }

    static default(): Job {
        let data : IJob = {
            title: "",
            description: "",
            budget_range: ""
        }

        return new Job(data);
    }

    clone() : Job {
        return new Job(this.clone_data())
    }

    setTitle(title : string){
      this.data.title = title;
    }
  
    setBudgetRange(budget_range : string){
      this.data.budget_range = budget_range
    }
  
    setDescription(description : string){
      this.data.description = description
    }

}