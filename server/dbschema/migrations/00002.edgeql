CREATE MIGRATION m1e6my4bmhiz2hp5gsejegwhbcvo5z2yifpgvoxhsu23qt7ab4rzua
    ONTO m1aysfznnxv5wdy432uzkb2rsagaruzlfvbavnnfkj3pi23p2bfyna
{
  ALTER TYPE default::User {
      DROP PROPERTY bio;
      DROP PROPERTY city;
      DROP PROPERTY country;
      DROP PROPERTY full_address;
      DROP PROPERTY last_name;
      DROP PROPERTY phone;
      DROP PROPERTY postal_code;
  };
};
