import { redirect } from '@sveltejs/kit';

export const load = () => {
  return redirect(301, "/Andrew Jin-Meng Wong - Resume (Complete).pdf");
}