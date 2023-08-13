select default::Quotation {
  id,
  description,
  total_amount,
  destine: {
    id,
    name
  },
  job : {
    id,
    payer : {
      id
    },
    approved_quotation_id
  }
} filter .id = <std::uuid> $quotation_id 

