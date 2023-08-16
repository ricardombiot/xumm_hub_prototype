CREATE MIGRATION m1xbbaulqc64rydx3kjiou6ajpo4ng2l4bisq23ewubbp7vmdzs7eq
    ONTO m1e6my4bmhiz2hp5gsejegwhbcvo5z2yifpgvoxhsu23qt7ab4rzua
{
  ALTER TYPE default::User {
      CREATE PROPERTY bio: std::str;
      CREATE PROPERTY city: std::str;
      CREATE PROPERTY country: std::str;
      CREATE PROPERTY full_address: std::str;
      CREATE PROPERTY last_name: std::str;
      CREATE PROPERTY phone: std::str;
      CREATE PROPERTY postal_code: std::str;
  };
};
