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
    approved_quotation
  },
  escrow_state,
  state
} filter .id = <std::uuid> $quotation_id 

