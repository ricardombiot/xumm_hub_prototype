select default::Quotation {
  id,
  description,
  total_amount,
  delta_days,
  destine: {
    name
  },
} filter .job.id = <std::uuid> $job_id and
  .destine.id = <std::uuid> $destine_id 
  limit 1

