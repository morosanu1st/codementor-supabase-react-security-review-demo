-- Illustrative RLS mindset (not production-ready as-is)
-- Enable RLS, then allow users to touch only their rows.

alter table public.orders enable row level security;

-- Read own orders
create policy "orders_select_own"
  on public.orders
  for select
  using (auth.uid() = user_id);

-- Insert only as yourself
create policy "orders_insert_own"
  on public.orders
  for insert
  with check (auth.uid() = user_id);

-- Avoid: using (true) on write policies for user tables
