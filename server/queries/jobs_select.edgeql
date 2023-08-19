select default::Job {
  id,
  payer : {
    id,
    name
  },
  title,
  description,
  budget_range
} limit 50