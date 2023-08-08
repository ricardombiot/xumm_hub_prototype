select default::Job {
  id,
  payer : {
    id
  },
  title,
  description,
  budget_range
} filter .id = <std::uuid> $job_id