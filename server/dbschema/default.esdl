module default {

  type User {
    required public_address -> str;
    email -> str;
    name -> str;
    description -> str;
  }

  type Job {
    required payer -> User;
    #destine -> User;

    required title -> str;
    required description -> str;
    budget_range -> str;

    link quotations := .<job[is Quotation];
  }

  type Quotation {
    required job -> Job;
    required description -> str;
    required total_amount -> float64;
    required destine -> User;
  }

}
