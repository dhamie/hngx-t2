import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
        },
        authorize: (credentials) => {
        // Add logic here to look up the user from the credentials supplied
        const user = {id: 1, email: "user@example.com", password: "1Password" }
    
        if (credentials.email === user.email && credentials.password === user.password) {
            // Any object returned will be saved in `user` property of the JWT
            return {id: 1, email: "user@example.com", password: "1Password" }
        } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
        }
    })
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user}) {
        // Persist the OAuth access_token and or the user id to the token right after signin
        if (user) {
            token.id = user.id
        }
        return token
    },
    secret: process.env.NEXTAUTH_SECRET,
    async session({ session, token, user }) {
        // Send properties to the client, like an access_token and user id from a provider.
        if(token){
        session.id = token.id
        }
        
        
        return session
    }
    },
    // pages: {
    //     signIn: '/auth/signin',
    // },  
   
}

export default NextAuth(authOptions)