update default::User 
filter .id = <std::uuid> $user_id
set {
  email := <std::str> $email,
  name := <std::str> $name,
  last_name := <std::str> $last_name,
  full_address := <std::str> $full_address,
  city := <std::str> $city,
  postal_code := <std::str> $postal_code,
  country := <std::str> $country,
  phone := <std::str> $phone,
  bio := <std::str> $bio,
} 