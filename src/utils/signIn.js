export default async function signIn(supabaseClient) {
  await supabaseClient.auth.signIn({ provider: "google" }, {redirectTo: 'http://localhost:3000/redirecting'})
}