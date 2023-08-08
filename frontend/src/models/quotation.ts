import { InmmutableModel } from "./inmmutable_model";


export interface IJobQuotation {
    job_id : string,
    description : string,
    total_amount : number
}

export class Quotation extends InmmutableModel<IJobQuotation>  {

    constructor(quote : IJobQuotation){
        super(quote);
    }

    static default(job_id : string): Quotation {
        let data : IJobQuotation = {
            job_id : job_id,
            description: "",
            total_amount: 0.0
        }

        return new Quotation(data);
    }

    clone() : Quotation {
        return new Quotation(this.clone_data())
    }

    setTotalAmount(total_amount : string){
      this.data.total_amount = parseFloat(total_amount);
    }
  
    setDescription(description : string){
      this.data.description = description
    }

}