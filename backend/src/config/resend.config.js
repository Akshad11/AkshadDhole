const { Resend } = require('resend');

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
    console.warn("Resend API Key is missing. Email service will not work correctly.");
    module.exports = {
        emails: {
            send: async () => {
                throw new Error("Resend API Key is missing");
            },
        },
    };
} else {
    const resend = new Resend(apiKey);
    module.exports = resend;
}
