CREATE MIGRATION m1plrbhbl3ms3r7sg2r5xwlnbvhkfy7lifj5ctkr4alyz6tqqhe3na
    ONTO m1t3wrr6h4ggi5nc2csiwvnn7fbdmz6dei5wgqxja7dp4c5asi7yuq
{
  ALTER TYPE default::DirectTransfer {
      CREATE LINK owner: default::User;
  };
};
