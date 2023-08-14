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

    approved_quotation -> Quotation;

    link quotations := .<job[is Quotation];

    created_at: datetime {
      readonly := true;
      default := datetime_of_statement();
    }
  }



  scalar type StateQuotationEscrow extending enum<NONE,BUILED,WAITING_XUMM_SIGN,CHECKED,WAITING_XUMM_SIGN_FINISH,FINISHED>;
  scalar type StateQuotation extending enum<PUBLISHED, APPROVED, DONE, CONFIRMED, CLOSED>;
  
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

    escrow_finished_xumm_payload_uuid -> str;

    escrow_state -> default::StateQuotationEscrow {
      default := <default::StateQuotationEscrow> "NONE";
    }

    state -> default::StateQuotation {
      default := <default::StateQuotation> "PUBLISHED";
    }


    escrow_checked_at: datetime;

    created_at: datetime {
      readonly := true;
      default := datetime_of_statement();
    }

    link txs := .<quotation[is Tx];
    link direct_transfers := .<quotation[is DirectTransfer];
  }

  type Tx {
    required quotation: Quotation;
    required tx_type: str;
    required ledger_txid: str;

    created_at: datetime {
      readonly := true;
      default := datetime_of_statement();
    }
  }

  type DirectTransfer {

    quotation -> Quotation;
    payload -> str;
    xumm_payload_uuid -> str;
    owner -> User;
    is_checked -> bool {
      default := false
    }

    created_at: datetime {
      readonly := true;
      default := datetime_of_statement();
    }
  }


}
