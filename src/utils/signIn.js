export default async function signIn(supabaseClient) {
  const { user, error } = await supabaseClient.auth.signIn({ provider: "google" }, { redirectTo: "http://neecathon.neecist.xyz/redirecting" });
  console.log(user, error);
}
