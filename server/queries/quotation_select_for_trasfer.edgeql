select default::Quotation {
  destine : {
    id,
    public_address
  },
  job : {
    payer : {
      id,
      public_address
    }
  },
  state
} filter .id = <std::uuid> $quotation_id and .state != <default::StateQuotation> "PUBLISHED"

