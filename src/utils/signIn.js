export default async function signIn(supabaseClient) {
  const { user, error } = await supabaseClient.auth.signIn({ provider: "google" }, { redirectTo: "http://keen-feynman-6f073c.netlify.app/redirecting" });
  console.log(user, error);
}
