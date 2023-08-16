select default::Quotation {
  id,
  description,
  total_amount,
  destine: {
    id,
    name
  },
  job : {
    id
  }
} filter .job.payer.id = <std::uuid> $payer_id and
  .job.id = <std::uuid> $job_id

