import { redirect } from '@sveltejs/kit';

export const load = ({params}) => {
  return redirect(301, "https://blog.featherbear.cc/" + params.slug);
}