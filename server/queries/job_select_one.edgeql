select default::Job {
  id,
  payer : {
    id
  },
  title,
  description,
  budget_range,
  approved_quotation : {
    id
  }
} filter .id = <std::uuid> $job_id