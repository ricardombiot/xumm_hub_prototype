CREATE MIGRATION m1ahpys7rcbgsbqzileujzv4yhcby4d3vrx5cjyuln2eb2fiidhyaq
    ONTO m17vrla3nv7cmd435z6pn3hs3i3p5mcfosbfqipbsopw4ma4ydg5lq
{
  ALTER TYPE default::User {
      ALTER PROPERTY email {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY name {
          RESET OPTIONALITY;
      };
  };
};
