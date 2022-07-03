export default async function signIn(supabaseClient) {
  await supabaseClient.auth.signIn({ provider: "google" }, { redirectTo: "http://neecathon.neecist.xyz/redirecting" });
}
