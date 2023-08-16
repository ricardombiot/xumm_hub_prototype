select default::User {
  id,
  name,
  last_name,
  country,
  bio
} filter .id = <std::uuid> $user_id