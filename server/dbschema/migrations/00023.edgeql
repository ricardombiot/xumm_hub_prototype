CREATE MIGRATION m1kb3fybkbwrtruz76ctpbkrrn7pekhk47c7yboapm5j4jiuf4feoq
    ONTO m1mbeii3nv6i3rbkapt5hsegcbmdvdjtuvgurvcoenugczc3r3vuxq
{
  ALTER TYPE default::Quotation {
      CREATE PROPERTY delta_days: std::int32 {
          SET default := 7;
      };
  };
};
