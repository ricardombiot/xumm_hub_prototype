CREATE MIGRATION m1urmhcamp5q4coucrrdoiyvrk2kntpju6e3ocq74x5oqpjoep6uxq
    ONTO m1f4zuefjfwmoaep5edbi3fwoczm5ecf4ojhxwbu2dox34jt5xctba
{
  ALTER TYPE default::Quotation {
      ALTER PROPERTY escrow_sequence {
          SET TYPE std::int64 USING (<std::int64>.escrow_sequence);
      };
  };
};
