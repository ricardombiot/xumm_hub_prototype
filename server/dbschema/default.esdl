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

  scalar type StateQuotationEscrow extending enum<NONE,BUILED,WAITING_XUMM_SIGN,CHECKED,FINISH>;
  type Quotation {
    required job -> Job;
    required description -> str;
    required total_amount -> float64;
    required destine -> User;

    escrow_payload -> str;
    escrow_fullfilment -> str;

    escrow_xumm_payload_uuid -> str;
    escrow_txid -> str;
    escrow_sequence -> int64;

    escrow_state -> default::StateQuotationEscrow {
      default := <default::StateQuotationEscrow> "NONE";
    }

  }

}
