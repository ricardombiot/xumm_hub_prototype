select default::Quotation {
  total_amount,
  destine : {
    public_address
  },
  job : {
    payer : {
      id,
      public_address
    }
  }
} filter .job.payer.id = <std::uuid> $payer_id and
  .id = <std::uuid> $quotation_id

