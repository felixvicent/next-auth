import { auth, signOut } from "@/auth"

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div>
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
      <form action={async () => {
        "use server";

        await signOut();
      }}>
        <button type="submit">Sign out</button>
      </form>
    </div>
  )
}