select default::User {
  id,
  public_address,
  email,
  name,
  last_name,
  full_address,
  city,
  postal_code,
  country,
  phone,
  bio
} filter .id = <std::uuid> $user_id