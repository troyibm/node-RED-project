module.exports = {
    uiPort: process.env.PORT,
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET,
    adminAuth: {
        type: "credentials",
        users: [],
        default: {
            permissions: "read"
        }
    }
}
