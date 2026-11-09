-- Payments tracking schema for UZS (Payme, Click, Uzum) and World (Visa, Mastercard, Google Pay)
CREATE TABLE IF NOT EXISTS public.payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email text,
  plan text NOT NULL CHECK (plan IN ('pro', 'ultra_pro')),
  currency text NOT NULL CHECK (currency IN ('UZS', 'USD')),
  amount numeric NOT NULL,
  payment_method text NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  transaction_id text,
  receipt_url text,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

-- Enable RLS
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to view their own payments
CREATE POLICY "Users can view own payments" ON public.payments
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- Allow authenticated users to insert their own payments
CREATE POLICY "Users can create payments" ON public.payments
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Service role full access
CREATE POLICY "Service role full access on payments" ON public.payments
  FOR ALL TO service_role
  USING (true)
  WITH CHECK (true);
