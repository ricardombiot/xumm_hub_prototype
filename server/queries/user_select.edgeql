select default::User {
  id,
  email
} filter .public_address = <std::str> $user_address