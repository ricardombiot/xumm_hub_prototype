CREATE MIGRATION m17r75ilri6256dtyzjcf557wa2hmded2obr6err5ql5vffgd2vk5a
    ONTO m1plrbhbl3ms3r7sg2r5xwlnbvhkfy7lifj5ctkr4alyz6tqqhe3na
{
  ALTER TYPE default::User {
      CREATE PROPERTY city: std::str;
  };
  ALTER TYPE default::User {
      CREATE PROPERTY country: std::str;
  };
  ALTER TYPE default::User {
      ALTER PROPERTY description {
          RENAME TO bio;
      };
  };
  ALTER TYPE default::User {
      CREATE PROPERTY full_address: std::str;
      CREATE PROPERTY last_name: std::str;
      CREATE PROPERTY phone: std::str;
      CREATE PROPERTY postal_code: std::str;
  };
};
