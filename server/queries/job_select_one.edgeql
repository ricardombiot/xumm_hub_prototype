select default::Job {
  id,
  payer : {
    id
  },
  title,
  description
} filter .id = <std::uuid> $job_id