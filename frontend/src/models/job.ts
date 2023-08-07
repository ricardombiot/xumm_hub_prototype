
class InmmutableModel<T> {
    constructor(public data : T){
    }

    protected clone_data() : T {
      return JSON.parse(JSON.stringify(this.data));
    }
}

interface IJob {
    title : string,
    budget : string,
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
            budget: ""
        }

        return new Job(data);
    }

    clone() : Job {
        return new Job(this.clone_data())
    }

    setTitle(title : string){
      this.data.title = title;
    }
  
    setBudget(budget : string){
      this.data.budget = budget
    }
  
    setDescription(description : string){
      this.data.description = description
    }

}