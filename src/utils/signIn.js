export default async function signIn(supabaseClient) {
    const { error } = await supabaseClient.auth.signIn({ provider: "google" }, {
      redirectTo: 'http://localhost:3000/game'
    });
    if (error) console.log(error);
  }